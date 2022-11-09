import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2SentimentAnalysisRequestConfig
/** 
 * Configures the types of sentiment analysis to perform.
**/
export class GoogleCloudDialogflowV2SentimentAnalysisRequestConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=analyzeQueryTextSentiment" })
  analyzeQueryTextSentiment?: boolean;
}
