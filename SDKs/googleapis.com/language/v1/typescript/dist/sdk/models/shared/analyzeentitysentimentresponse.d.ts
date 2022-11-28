import { SpeakeasyBase } from "../../../internal/utils";
import { Entity } from "./entity";
/**
 * The entity-level sentiment analysis response message.
**/
export declare class AnalyzeEntitySentimentResponse extends SpeakeasyBase {
    entities?: Entity[];
    language?: string;
}
