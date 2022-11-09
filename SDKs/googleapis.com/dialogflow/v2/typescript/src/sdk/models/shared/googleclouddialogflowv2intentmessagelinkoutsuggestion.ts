import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion
/** 
 * The suggestion chip message that allows the user to jump out to the app or website associated with this agent.
**/
export class GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationName" })
  destinationName?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
