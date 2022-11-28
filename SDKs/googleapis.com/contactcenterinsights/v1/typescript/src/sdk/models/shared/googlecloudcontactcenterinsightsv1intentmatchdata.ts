import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudContactcenterinsightsV1IntentMatchData
/** 
 * The data for an intent match. Represents an intent match for a text segment in the conversation. A text segment can be part of a sentence, a complete sentence, or an utterance with multiple sentences.
**/
export class GoogleCloudContactcenterinsightsV1IntentMatchData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=intentUniqueId" })
  intentUniqueId?: string;
}
