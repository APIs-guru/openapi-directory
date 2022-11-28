import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExchangeAssignedTargetingOptionDetails
/** 
 * Details for assigned exchange targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_EXCHANGE`.
**/
export class ExchangeAssignedTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}
