import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationModelOptions } from "./classificationmodeloptions";
/**
 * All available features for sentiment, syntax, and semantic analysis. Setting each one to true will enable that specific analysis for the input.
**/
export declare class Features extends SpeakeasyBase {
    classificationModelOptions?: ClassificationModelOptions;
    classifyText?: boolean;
    extractDocumentSentiment?: boolean;
    extractEntities?: boolean;
    extractEntitySentiment?: boolean;
    extractSyntax?: boolean;
}
