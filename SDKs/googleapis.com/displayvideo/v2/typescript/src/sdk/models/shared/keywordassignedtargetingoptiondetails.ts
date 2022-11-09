import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KeywordAssignedTargetingOptionDetails
/** 
 * Details for assigned keyword targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_KEYWORD`.
**/
export class KeywordAssignedTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyword" })
  keyword?: string;

  @Metadata({ data: "json, name=negative" })
  negative?: boolean;
}
