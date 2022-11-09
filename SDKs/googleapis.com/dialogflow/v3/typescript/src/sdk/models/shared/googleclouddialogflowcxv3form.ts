import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3FormParameter } from "./googleclouddialogflowcxv3formparameter";


// GoogleCloudDialogflowCxV3Form
/** 
 * A form is a data model that groups related parameters that can be collected from the user. The process in which the agent prompts the user and collects parameter values from the user is called form filling. A form can be added to a page. When form filling is done, the filled parameters will be written to the session.
**/
export class GoogleCloudDialogflowCxV3Form extends SpeakeasyBase {
  @Metadata({ data: "json, name=parameters", elemType: shared.GoogleCloudDialogflowCxV3FormParameter })
  parameters?: GoogleCloudDialogflowCxV3FormParameter[];
}
