import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GrpcRouteMethodMatchTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Exact = "EXACT"
,    RegularExpression = "REGULAR_EXPRESSION"
}


// GrpcRouteMethodMatch
/** 
 * Specifies a match against a method.
**/
export class GrpcRouteMethodMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=caseSensitive" })
  caseSensitive?: boolean;

  @Metadata({ data: "json, name=grpcMethod" })
  grpcMethod?: string;

  @Metadata({ data: "json, name=grpcService" })
  grpcService?: string;

  @Metadata({ data: "json, name=type" })
  type?: GrpcRouteMethodMatchTypeEnum;
}
