import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1InstalledApp } from "./googlechromemanagementv1installedapp";
/**
 * Response containing details of queried installed apps.
**/
export declare class GoogleChromeManagementV1CountInstalledAppsResponse extends SpeakeasyBase {
    installedApps?: GoogleChromeManagementV1InstalledApp[];
    nextPageToken?: string;
    totalSize?: number;
}
