import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ViewabilityTargetingOptionDetailsViewabilityEnum {
    ViewabilityUnspecified = "VIEWABILITY_UNSPECIFIED"
,    Viewability10PercentOrMore = "VIEWABILITY_10_PERCENT_OR_MORE"
,    Viewability20PercentOrMore = "VIEWABILITY_20_PERCENT_OR_MORE"
,    Viewability30PercentOrMore = "VIEWABILITY_30_PERCENT_OR_MORE"
,    Viewability40PercentOrMore = "VIEWABILITY_40_PERCENT_OR_MORE"
,    Viewability50PercentOrMore = "VIEWABILITY_50_PERCENT_OR_MORE"
,    Viewability60PercentOrMore = "VIEWABILITY_60_PERCENT_OR_MORE"
,    Viewability70PercentOrMore = "VIEWABILITY_70_PERCENT_OR_MORE"
,    Viewability80PercentOrMore = "VIEWABILITY_80_PERCENT_OR_MORE"
,    Viewability90PercentOrMore = "VIEWABILITY_90_PERCENT_OR_MORE"
}


// ViewabilityTargetingOptionDetails
/** 
 * Represents a targetable viewability. This will be populated in the viewability_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_VIEWABILITY`.
**/
export class ViewabilityTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=viewability" })
  viewability?: ViewabilityTargetingOptionDetailsViewabilityEnum;
}
