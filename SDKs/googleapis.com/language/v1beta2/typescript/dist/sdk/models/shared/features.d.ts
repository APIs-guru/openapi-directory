import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ClassificationModelOptions } from "./classificationmodeloptions";
/**
 * All available features for sentiment, syntax, and semantic analysis. Setting each one to true will enable that specific analysis for the input. Next ID: 11
**/
export declare class Features extends SpeakeasyBase {
    classificationModelOptions?: ClassificationModelOptions;
    classifyText?: boolean;
    extractDocumentSentiment?: boolean;
    extractEntities?: boolean;
    extractEntitySentiment?: boolean;
    extractSyntax?: boolean;
}
