import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Assigned category targeting option details. This will be populated in the category_details field when targeting_type is `TARGETING_TYPE_CATEGORY`.
**/
export declare class CategoryAssignedTargetingOptionDetails extends SpeakeasyBase {
    displayName?: string;
    negative?: boolean;
    targetingOptionId?: string;
}
/**
 * Assigned category targeting option details. This will be populated in the category_details field when targeting_type is `TARGETING_TYPE_CATEGORY`.
**/
export declare class CategoryAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
    negative?: boolean;
    targetingOptionId?: string;
}
