import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion
/** 
 * The suggestion chip message that allows the user to jump out to the app or website associated with this agent.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationName" })
  destinationName?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
