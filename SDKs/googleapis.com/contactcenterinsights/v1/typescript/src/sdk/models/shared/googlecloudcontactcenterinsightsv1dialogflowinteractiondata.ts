import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudContactcenterinsightsV1DialogflowInteractionData
/** 
 * Dialogflow interaction data.
**/
export class GoogleCloudContactcenterinsightsV1DialogflowInteractionData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=dialogflowIntentId" })
  dialogflowIntentId?: string;
}
