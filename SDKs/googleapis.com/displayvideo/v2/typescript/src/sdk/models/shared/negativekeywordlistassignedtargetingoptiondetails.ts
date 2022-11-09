import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NegativeKeywordListAssignedTargetingOptionDetails
/** 
 * Targeting details for negative keyword list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST`.
**/
export class NegativeKeywordListAssignedTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=negativeKeywordListId" })
  negativeKeywordListId?: string;
}
