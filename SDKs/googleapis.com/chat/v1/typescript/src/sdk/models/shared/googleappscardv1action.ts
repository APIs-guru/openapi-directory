import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAppsCardV1ActionParameter } from "./googleappscardv1actionparameter";

export enum GoogleAppsCardV1ActionLoadIndicatorEnum {
    Spinner = "SPINNER"
,    None = "NONE"
}


// GoogleAppsCardV1Action
/** 
 * An action that describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form.
**/
export class GoogleAppsCardV1Action extends SpeakeasyBase {
  @Metadata({ data: "json, name=function" })
  function?: string;

  @Metadata({ data: "json, name=loadIndicator" })
  loadIndicator?: GoogleAppsCardV1ActionLoadIndicatorEnum;

  @Metadata({ data: "json, name=parameters", elemType: shared.GoogleAppsCardV1ActionParameter })
  parameters?: GoogleAppsCardV1ActionParameter[];

  @Metadata({ data: "json, name=persistValues" })
  persistValues?: boolean;
}
