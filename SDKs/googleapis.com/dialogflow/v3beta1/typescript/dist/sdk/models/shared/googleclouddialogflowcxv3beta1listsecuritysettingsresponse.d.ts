import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1SecuritySettings } from "./googleclouddialogflowcxv3beta1securitysettings";
/**
 * The response message for SecuritySettings.ListSecuritySettings.
**/
export declare class GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    securitySettings?: GoogleCloudDialogflowCxV3beta1SecuritySettings[];
}
