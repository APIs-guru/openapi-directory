import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details for assigned app category targeting option. This will be populated in the app_category_details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP_CATEGORY`.
**/
export declare class AppCategoryAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
    negative?: boolean;
    targetingOptionId?: string;
}
/**
 * Details for assigned app category targeting option. This will be populated in the app_category_details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP_CATEGORY`.
**/
export declare class AppCategoryAssignedTargetingOptionDetails extends SpeakeasyBase {
    displayName?: string;
    negative?: boolean;
    targetingOptionId?: string;
}
