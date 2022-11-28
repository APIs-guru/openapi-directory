import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo
/** 
 * Represents a single followup intent in the chain.
**/
export class GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=followupIntentName" })
  followupIntentName?: string;

  @SpeakeasyMetadata({ data: "json, name=parentFollowupIntentName" })
  parentFollowupIntentName?: string;
}
