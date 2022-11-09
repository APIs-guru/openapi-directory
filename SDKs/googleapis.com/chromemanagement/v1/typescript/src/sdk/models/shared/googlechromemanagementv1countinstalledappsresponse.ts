import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleChromeManagementV1InstalledApp } from "./googlechromemanagementv1installedapp";


// GoogleChromeManagementV1CountInstalledAppsResponse
/** 
 * Response containing details of queried installed apps.
**/
export class GoogleChromeManagementV1CountInstalledAppsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=installedApps", elemType: shared.GoogleChromeManagementV1InstalledApp })
  installedApps?: GoogleChromeManagementV1InstalledApp[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
