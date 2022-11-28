import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3SecuritySettings } from "./googleclouddialogflowcxv3securitysettings";
/**
 * The response message for SecuritySettings.ListSecuritySettings.
**/
export declare class GoogleCloudDialogflowCxV3ListSecuritySettingsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    securitySettings?: GoogleCloudDialogflowCxV3SecuritySettings[];
}
