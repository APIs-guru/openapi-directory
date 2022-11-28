import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DimensionValueMatchTypeEnum {
    Exact = "EXACT",
    BeginsWith = "BEGINS_WITH",
    Contains = "CONTAINS",
    WildcardExpression = "WILDCARD_EXPRESSION"
}


// DimensionValue
/** 
 * Represents a DimensionValue resource.
**/
export class DimensionValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionName" })
  dimensionName?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=matchType" })
  matchType?: DimensionValueMatchTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
