import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1SecuritySettings } from "./googleclouddialogflowcxv3beta1securitysettings";



// GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse
/** 
 * The response message for SecuritySettings.ListSecuritySettings.
**/
export class GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=securitySettings", elemType: GoogleCloudDialogflowCxV3beta1SecuritySettings })
  securitySettings?: GoogleCloudDialogflowCxV3beta1SecuritySettings[];
}
