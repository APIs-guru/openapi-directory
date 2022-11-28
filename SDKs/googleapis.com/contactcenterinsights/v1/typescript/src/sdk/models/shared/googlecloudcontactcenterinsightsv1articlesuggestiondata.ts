import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudContactcenterinsightsV1ArticleSuggestionData
/** 
 * Agent Assist Article Suggestion data.
**/
export class GoogleCloudContactcenterinsightsV1ArticleSuggestionData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidenceScore" })
  confidenceScore?: number;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=queryRecord" })
  queryRecord?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
