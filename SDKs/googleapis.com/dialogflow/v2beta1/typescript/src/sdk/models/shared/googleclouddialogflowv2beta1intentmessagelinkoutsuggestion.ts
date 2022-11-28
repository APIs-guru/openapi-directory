import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion
/** 
 * The suggestion chip message that allows the user to jump out to the app or website associated with this agent.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationName" })
  destinationName?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
