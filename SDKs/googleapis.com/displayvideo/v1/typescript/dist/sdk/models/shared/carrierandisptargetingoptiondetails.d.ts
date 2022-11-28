import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CarrierAndIspTargetingOptionDetailsTypeEnum {
    CarrierAndIspTypeUnspecified = "CARRIER_AND_ISP_TYPE_UNSPECIFIED",
    CarrierAndIspTypeIsp = "CARRIER_AND_ISP_TYPE_ISP",
    CarrierAndIspTypeCarrier = "CARRIER_AND_ISP_TYPE_CARRIER"
}
/**
 * Represents a targetable carrier or ISP. This will be populated in the carrier_and_isp_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`.
**/
export declare class CarrierAndIspTargetingOptionDetails extends SpeakeasyBase {
    displayName?: string;
    type?: CarrierAndIspTargetingOptionDetailsTypeEnum;
}
