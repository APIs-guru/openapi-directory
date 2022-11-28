import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details for assigned browser targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BROWSER`.
**/
export declare class BrowserAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
    negative?: boolean;
    targetingOptionId?: string;
}
/**
 * Details for assigned browser targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BROWSER`.
**/
export declare class BrowserAssignedTargetingOptionDetails extends SpeakeasyBase {
    displayName?: string;
    negative?: boolean;
    targetingOptionId?: string;
}
