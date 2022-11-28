import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Assigned device make and model targeting option details. This will be populated in the device_make_model_details field when targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`.
**/
export declare class DeviceMakeModelAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
    negative?: boolean;
    targetingOptionId?: string;
}
/**
 * Assigned device make and model targeting option details. This will be populated in the device_make_model_details field when targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`.
**/
export declare class DeviceMakeModelAssignedTargetingOptionDetails extends SpeakeasyBase {
    displayName?: string;
    negative?: boolean;
    targetingOptionId?: string;
}
