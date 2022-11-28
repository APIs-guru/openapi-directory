import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3SecuritySettings } from "./googleclouddialogflowcxv3securitysettings";



// GoogleCloudDialogflowCxV3ListSecuritySettingsResponse
/** 
 * The response message for SecuritySettings.ListSecuritySettings.
**/
export class GoogleCloudDialogflowCxV3ListSecuritySettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=securitySettings", elemType: GoogleCloudDialogflowCxV3SecuritySettings })
  securitySettings?: GoogleCloudDialogflowCxV3SecuritySettings[];
}
