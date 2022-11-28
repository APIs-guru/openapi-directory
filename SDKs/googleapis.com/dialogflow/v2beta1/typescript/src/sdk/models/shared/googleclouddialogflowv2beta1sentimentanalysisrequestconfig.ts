import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig
/** 
 * Configures the types of sentiment analysis to perform.
**/
export class GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analyzeQueryTextSentiment" })
  analyzeQueryTextSentiment?: boolean;
}
