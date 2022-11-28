import { SpeakeasyBase } from "../../../internal/utils";
import { TextOperatorOptions } from "./textoperatoroptions";
import { RetrievalImportance } from "./retrievalimportance";
/**
 * The options for text properties.
**/
export declare class TextPropertyOptions extends SpeakeasyBase {
    operatorOptions?: TextOperatorOptions;
    retrievalImportance?: RetrievalImportance;
}
