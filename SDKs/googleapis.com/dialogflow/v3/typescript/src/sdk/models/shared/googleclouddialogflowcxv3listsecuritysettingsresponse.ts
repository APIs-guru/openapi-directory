import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3SecuritySettings } from "./googleclouddialogflowcxv3securitysettings";


// GoogleCloudDialogflowCxV3ListSecuritySettingsResponse
/** 
 * The response message for SecuritySettings.ListSecuritySettings.
**/
export class GoogleCloudDialogflowCxV3ListSecuritySettingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=securitySettings", elemType: shared.GoogleCloudDialogflowCxV3SecuritySettings })
  securitySettings?: GoogleCloudDialogflowCxV3SecuritySettings[];
}
