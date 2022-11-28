import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationCategory } from "./classificationcategory";
import { Sentiment } from "./sentiment";
import { Entity } from "./entity";
import { Sentence } from "./sentence";
import { Token } from "./token";
/**
 * The text annotations response message.
**/
export declare class AnnotateTextResponse extends SpeakeasyBase {
    categories?: ClassificationCategory[];
    documentSentiment?: Sentiment;
    entities?: Entity[];
    language?: string;
    sentences?: Sentence[];
    tokens?: Token[];
}
