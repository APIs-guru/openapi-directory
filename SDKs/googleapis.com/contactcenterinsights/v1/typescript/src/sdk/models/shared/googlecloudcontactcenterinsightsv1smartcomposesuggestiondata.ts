import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData
/** 
 * Agent Assist Smart Compose suggestion data.
**/
export class GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidenceScore" })
  confidenceScore?: number;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=queryRecord" })
  queryRecord?: string;

  @SpeakeasyMetadata({ data: "json, name=suggestion" })
  suggestion?: string;
}
