import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3FormParameterInput } from "./googleclouddialogflowcxv3formparameter";
import { GoogleCloudDialogflowCxV3FormParameter } from "./googleclouddialogflowcxv3formparameter";
/**
 * A form is a data model that groups related parameters that can be collected from the user. The process in which the agent prompts the user and collects parameter values from the user is called form filling. A form can be added to a page. When form filling is done, the filled parameters will be written to the session.
**/
export declare class GoogleCloudDialogflowCxV3FormInput extends SpeakeasyBase {
    parameters?: GoogleCloudDialogflowCxV3FormParameterInput[];
}
/**
 * A form is a data model that groups related parameters that can be collected from the user. The process in which the agent prompts the user and collects parameter values from the user is called form filling. A form can be added to a page. When form filling is done, the filled parameters will be written to the session.
**/
export declare class GoogleCloudDialogflowCxV3Form extends SpeakeasyBase {
    parameters?: GoogleCloudDialogflowCxV3FormParameter[];
}
