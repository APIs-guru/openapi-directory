import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents article answer.
**/
export declare class GoogleCloudDialogflowV2ArticleAnswer extends SpeakeasyBase {
    answerRecord?: string;
    confidence?: number;
    metadata?: Map<string, string>;
    snippets?: string[];
    title?: string;
    uri?: string;
}
