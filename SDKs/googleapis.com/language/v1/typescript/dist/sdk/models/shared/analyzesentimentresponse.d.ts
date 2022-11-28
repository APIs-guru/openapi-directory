import { SpeakeasyBase } from "../../../internal/utils";
import { Sentiment } from "./sentiment";
import { Sentence } from "./sentence";
/**
 * The sentiment analysis response message.
**/
export declare class AnalyzeSentimentResponse extends SpeakeasyBase {
    documentSentiment?: Sentiment;
    language?: string;
    sentences?: Sentence[];
}
