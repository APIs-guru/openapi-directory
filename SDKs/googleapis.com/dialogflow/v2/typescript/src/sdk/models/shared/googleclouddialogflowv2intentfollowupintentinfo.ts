import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2IntentFollowupIntentInfo
/** 
 * Represents a single followup intent in the chain.
**/
export class GoogleCloudDialogflowV2IntentFollowupIntentInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=followupIntentName" })
  followupIntentName?: string;

  @Metadata({ data: "json, name=parentFollowupIntentName" })
  parentFollowupIntentName?: string;
}
