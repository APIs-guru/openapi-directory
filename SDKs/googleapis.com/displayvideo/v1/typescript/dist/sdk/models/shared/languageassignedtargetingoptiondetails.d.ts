import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details for assigned language targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_LANGUAGE`.
**/
export declare class LanguageAssignedTargetingOptionDetails extends SpeakeasyBase {
    displayName?: string;
    negative?: boolean;
    targetingOptionId?: string;
}
/**
 * Details for assigned language targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_LANGUAGE`.
**/
export declare class LanguageAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
    negative?: boolean;
    targetingOptionId?: string;
}
