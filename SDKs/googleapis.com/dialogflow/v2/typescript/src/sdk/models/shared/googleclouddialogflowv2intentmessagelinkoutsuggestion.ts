import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion
/** 
 * The suggestion chip message that allows the user to jump out to the app or website associated with this agent.
**/
export class GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationName" })
  destinationName?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
