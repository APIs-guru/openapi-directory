import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ViewabilityAssignedTargetingOptionDetailsViewabilityEnum {
    ViewabilityUnspecified = "VIEWABILITY_UNSPECIFIED",
    Viewability10PercentOrMore = "VIEWABILITY_10_PERCENT_OR_MORE",
    Viewability20PercentOrMore = "VIEWABILITY_20_PERCENT_OR_MORE",
    Viewability30PercentOrMore = "VIEWABILITY_30_PERCENT_OR_MORE",
    Viewability40PercentOrMore = "VIEWABILITY_40_PERCENT_OR_MORE",
    Viewability50PercentOrMore = "VIEWABILITY_50_PERCENT_OR_MORE",
    Viewability60PercentOrMore = "VIEWABILITY_60_PERCENT_OR_MORE",
    Viewability70PercentOrMore = "VIEWABILITY_70_PERCENT_OR_MORE",
    Viewability80PercentOrMore = "VIEWABILITY_80_PERCENT_OR_MORE",
    Viewability90PercentOrMore = "VIEWABILITY_90_PERCENT_OR_MORE"
}
/**
 * Assigned viewability targeting option details. This will be populated in the viewability_details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_VIEWABILITY`.
**/
export declare class ViewabilityAssignedTargetingOptionDetails extends SpeakeasyBase {
    targetingOptionId?: string;
    viewability?: ViewabilityAssignedTargetingOptionDetailsViewabilityEnum;
}
