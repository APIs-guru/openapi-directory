import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Sentiment } from "./sentiment";
import { Sentence } from "./sentence";



// AnalyzeSentimentResponse
/** 
 * The sentiment analysis response message.
**/
export class AnalyzeSentimentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentSentiment" })
  documentSentiment?: Sentiment;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=sentences", elemType: Sentence })
  sentences?: Sentence[];
}
