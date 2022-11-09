import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudContactcenterinsightsV1ArticleSuggestionData
/** 
 * Agent Assist Article Suggestion data.
**/
export class GoogleCloudContactcenterinsightsV1ArticleSuggestionData extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidenceScore" })
  confidenceScore?: number;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=queryRecord" })
  queryRecord?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
