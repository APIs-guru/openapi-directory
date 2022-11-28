import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NegativeKeywordListAssignedTargetingOptionDetails
/** 
 * Targeting details for negative keyword list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST`.
**/
export class NegativeKeywordListAssignedTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=negativeKeywordListId" })
  negativeKeywordListId?: string;
}
