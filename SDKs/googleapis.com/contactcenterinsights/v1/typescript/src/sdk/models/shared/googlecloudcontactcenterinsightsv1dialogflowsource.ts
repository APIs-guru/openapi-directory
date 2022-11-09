import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudContactcenterinsightsV1DialogflowSource
/** 
 * A Dialogflow source of conversation data.
**/
export class GoogleCloudContactcenterinsightsV1DialogflowSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioUri" })
  audioUri?: string;

  @Metadata({ data: "json, name=dialogflowConversation" })
  dialogflowConversation?: string;
}
