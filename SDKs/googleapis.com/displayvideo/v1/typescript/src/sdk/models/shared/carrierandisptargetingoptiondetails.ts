import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CarrierAndIspTargetingOptionDetailsTypeEnum {
    CarrierAndIspTypeUnspecified = "CARRIER_AND_ISP_TYPE_UNSPECIFIED"
,    CarrierAndIspTypeIsp = "CARRIER_AND_ISP_TYPE_ISP"
,    CarrierAndIspTypeCarrier = "CARRIER_AND_ISP_TYPE_CARRIER"
}


// CarrierAndIspTargetingOptionDetails
/** 
 * Represents a targetable carrier or ISP. This will be populated in the carrier_and_isp_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`.
**/
export class CarrierAndIspTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=type" })
  type?: CarrierAndIspTargetingOptionDetailsTypeEnum;
}
