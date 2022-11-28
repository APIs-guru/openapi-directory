import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1InstalledApp } from "./googlechromemanagementv1installedapp";



// GoogleChromeManagementV1CountInstalledAppsResponse
/** 
 * Response containing details of queried installed apps.
**/
export class GoogleChromeManagementV1CountInstalledAppsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=installedApps", elemType: GoogleChromeManagementV1InstalledApp })
  installedApps?: GoogleChromeManagementV1InstalledApp[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
