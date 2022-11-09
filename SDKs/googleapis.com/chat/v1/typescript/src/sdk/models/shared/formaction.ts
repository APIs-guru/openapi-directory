import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActionParameter } from "./actionparameter";


// FormAction
/** 
 * A form action describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form.
**/
export class FormAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionMethodName" })
  actionMethodName?: string;

  @Metadata({ data: "json, name=parameters", elemType: shared.ActionParameter })
  parameters?: ActionParameter[];
}
