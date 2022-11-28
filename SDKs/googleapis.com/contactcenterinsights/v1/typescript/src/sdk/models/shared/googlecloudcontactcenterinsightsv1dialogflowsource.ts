import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudContactcenterinsightsV1DialogflowSourceInput
/** 
 * A Dialogflow source of conversation data.
**/
export class GoogleCloudContactcenterinsightsV1DialogflowSourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audioUri" })
  audioUri?: string;
}


// GoogleCloudContactcenterinsightsV1DialogflowSource
/** 
 * A Dialogflow source of conversation data.
**/
export class GoogleCloudContactcenterinsightsV1DialogflowSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audioUri" })
  audioUri?: string;

  @SpeakeasyMetadata({ data: "json, name=dialogflowConversation" })
  dialogflowConversation?: string;
}
