import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2IntentFollowupIntentInfo
/** 
 * Represents a single followup intent in the chain.
**/
export class GoogleCloudDialogflowV2IntentFollowupIntentInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=followupIntentName" })
  followupIntentName?: string;

  @SpeakeasyMetadata({ data: "json, name=parentFollowupIntentName" })
  parentFollowupIntentName?: string;
}
