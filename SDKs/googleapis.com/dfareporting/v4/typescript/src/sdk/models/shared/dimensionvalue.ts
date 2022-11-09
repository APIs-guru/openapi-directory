import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DimensionValueMatchTypeEnum {
    Exact = "EXACT"
,    BeginsWith = "BEGINS_WITH"
,    Contains = "CONTAINS"
,    WildcardExpression = "WILDCARD_EXPRESSION"
}


// DimensionValue
/** 
 * Represents a DimensionValue resource.
**/
export class DimensionValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionName" })
  dimensionName?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=matchType" })
  matchType?: DimensionValueMatchTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
