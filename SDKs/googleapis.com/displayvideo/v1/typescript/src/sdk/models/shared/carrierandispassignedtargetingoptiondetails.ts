import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CarrierAndIspAssignedTargetingOptionDetails
/** 
 * Details for assigned carrier and ISP targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`.
**/
export class CarrierAndIspAssignedTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=negative" })
  negative?: boolean;

  @Metadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}
