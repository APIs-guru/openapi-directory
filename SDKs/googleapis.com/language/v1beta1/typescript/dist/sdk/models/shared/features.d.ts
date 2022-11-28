import { SpeakeasyBase } from "../../../internal/utils";
/**
 * All available features for sentiment, syntax, and semantic analysis. Setting each one to true will enable that specific analysis for the input.
**/
export declare class Features extends SpeakeasyBase {
    extractDocumentSentiment?: boolean;
    extractEntities?: boolean;
    extractSyntax?: boolean;
}
