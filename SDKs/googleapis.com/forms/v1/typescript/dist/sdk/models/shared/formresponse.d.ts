import { SpeakeasyBase } from "../../../internal/utils";
import { Answer } from "./answer";
/**
 * A form response.
**/
export declare class FormResponse extends SpeakeasyBase {
    answers?: Map<string, Answer>;
    createTime?: string;
    formId?: string;
    lastSubmittedTime?: string;
    respondentEmail?: string;
    responseId?: string;
    totalScore?: number;
}
