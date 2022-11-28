import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudContactcenterinsightsV1SentimentData
/** 
 * The data for a sentiment annotation.
**/
export class GoogleCloudContactcenterinsightsV1SentimentData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=magnitude" })
  magnitude?: number;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}
