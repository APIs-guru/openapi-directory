import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SubExchangeAssignedTargetingOptionDetails
/** 
 * Details for assigned sub-exchange targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_SUB_EXCHANGE`.
**/
export class SubExchangeAssignedTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}
