import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudContactcenterinsightsV1DialogflowInteractionData
/** 
 * Dialogflow interaction data.
**/
export class GoogleCloudContactcenterinsightsV1DialogflowInteractionData extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=dialogflowIntentId" })
  dialogflowIntentId?: string;
}
