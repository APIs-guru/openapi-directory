import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details for assigned carrier and ISP targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`.
**/
export declare class CarrierAndIspAssignedTargetingOptionDetails extends SpeakeasyBase {
    displayName?: string;
    negative?: boolean;
    targetingOptionId?: string;
}
/**
 * Details for assigned carrier and ISP targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`.
**/
export declare class CarrierAndIspAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
    negative?: boolean;
    targetingOptionId?: string;
}
