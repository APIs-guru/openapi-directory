import { SpeakeasyBase } from "../../../internal/utils";
import { ActionParameter } from "./actionparameter";
/**
 * A form action describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form.
**/
export declare class FormAction extends SpeakeasyBase {
    actionMethodName?: string;
    parameters?: ActionParameter[];
}
