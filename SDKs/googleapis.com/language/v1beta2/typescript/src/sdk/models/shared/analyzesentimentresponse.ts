import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Sentiment } from "./sentiment";
import { Sentence } from "./sentence";


// AnalyzeSentimentResponse
/** 
 * The sentiment analysis response message.
**/
export class AnalyzeSentimentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentSentiment" })
  documentSentiment?: Sentiment;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=sentences", elemType: shared.Sentence })
  sentences?: Sentence[];
}
