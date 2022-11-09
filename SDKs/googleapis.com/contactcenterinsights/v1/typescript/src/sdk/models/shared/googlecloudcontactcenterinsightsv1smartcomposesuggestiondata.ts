import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData
/** 
 * Agent Assist Smart Compose suggestion data.
**/
export class GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidenceScore" })
  confidenceScore?: number;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=queryRecord" })
  queryRecord?: string;

  @Metadata({ data: "json, name=suggestion" })
  suggestion?: string;
}
