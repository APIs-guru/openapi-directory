import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionParameter } from "./actionparameter";



// FormAction
/** 
 * A form action describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form.
**/
export class FormAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionMethodName" })
  actionMethodName?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: ActionParameter })
  parameters?: ActionParameter[];
}
