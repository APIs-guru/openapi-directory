import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudContactcenterinsightsV1SentimentData
/** 
 * The data for a sentiment annotation.
**/
export class GoogleCloudContactcenterinsightsV1SentimentData extends SpeakeasyBase {
  @Metadata({ data: "json, name=magnitude" })
  magnitude?: number;

  @Metadata({ data: "json, name=score" })
  score?: number;
}
