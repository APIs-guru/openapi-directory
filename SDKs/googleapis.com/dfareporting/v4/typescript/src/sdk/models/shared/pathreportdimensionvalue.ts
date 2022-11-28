import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PathReportDimensionValueMatchTypeEnum {
    Exact = "EXACT",
    BeginsWith = "BEGINS_WITH",
    Contains = "CONTAINS",
    WildcardExpression = "WILDCARD_EXPRESSION"
}


// PathReportDimensionValue
/** 
 * Represents a PathReportDimensionValue resource.
**/
export class PathReportDimensionValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionName" })
  dimensionName?: string;

  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=matchType" })
  matchType?: PathReportDimensionValueMatchTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
