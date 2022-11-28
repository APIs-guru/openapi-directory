import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3SentimentAnalysisResult
/** 
 * The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral.
**/
export class GoogleCloudDialogflowCxV3SentimentAnalysisResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=magnitude" })
  magnitude?: number;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}
