import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GrpcRouteHeaderMatchTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Exact = "EXACT"
,    RegularExpression = "REGULAR_EXPRESSION"
}


// GrpcRouteHeaderMatch
/** 
 * A match against a collection of headers.
**/
export class GrpcRouteHeaderMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=type" })
  type?: GrpcRouteHeaderMatchTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
