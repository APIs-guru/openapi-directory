import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2SentimentAnalysisRequestConfig
/** 
 * Configures the types of sentiment analysis to perform.
**/
export class GoogleCloudDialogflowV2SentimentAnalysisRequestConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analyzeQueryTextSentiment" })
  analyzeQueryTextSentiment?: boolean;
}
