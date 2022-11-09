import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1SecuritySettings } from "./googleclouddialogflowcxv3beta1securitysettings";


// GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse
/** 
 * The response message for SecuritySettings.ListSecuritySettings.
**/
export class GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=securitySettings", elemType: shared.GoogleCloudDialogflowCxV3beta1SecuritySettings })
  securitySettings?: GoogleCloudDialogflowCxV3beta1SecuritySettings[];
}
