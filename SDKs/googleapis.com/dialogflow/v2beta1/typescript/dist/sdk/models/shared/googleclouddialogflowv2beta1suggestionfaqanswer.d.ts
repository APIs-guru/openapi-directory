import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents suggested answer from "frequently asked questions".
**/
export declare class GoogleCloudDialogflowV2beta1SuggestionFaqAnswer extends SpeakeasyBase {
    answer?: string;
    answerRecord?: string;
    confidence?: number;
    metadata?: Map<string, string>;
    question?: string;
    source?: string;
}
