import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GrpcRouteMethodMatchTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Exact = "EXACT",
    RegularExpression = "REGULAR_EXPRESSION"
}


// GrpcRouteMethodMatch
/** 
 * Specifies a match against a method.
**/
export class GrpcRouteMethodMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caseSensitive" })
  caseSensitive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=grpcMethod" })
  grpcMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=grpcService" })
  grpcService?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GrpcRouteMethodMatchTypeEnum;
}
