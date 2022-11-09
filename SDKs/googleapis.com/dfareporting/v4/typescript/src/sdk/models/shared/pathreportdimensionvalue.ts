import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PathReportDimensionValueMatchTypeEnum {
    Exact = "EXACT"
,    BeginsWith = "BEGINS_WITH"
,    Contains = "CONTAINS"
,    WildcardExpression = "WILDCARD_EXPRESSION"
}


// PathReportDimensionValue
/** 
 * Represents a PathReportDimensionValue resource.
**/
export class PathReportDimensionValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionName" })
  dimensionName?: string;

  @Metadata({ data: "json, name=ids" })
  ids?: string[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=matchType" })
  matchType?: PathReportDimensionValueMatchTypeEnum;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
