import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GrpcRouteHeaderMatchTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Exact = "EXACT",
    RegularExpression = "REGULAR_EXPRESSION"
}


// GrpcRouteHeaderMatch
/** 
 * A match against a collection of headers.
**/
export class GrpcRouteHeaderMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GrpcRouteHeaderMatchTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
