import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1ChromeAppRequest } from "./googlechromemanagementv1chromeapprequest";
/**
 * Response containing summary of requested app installations.
**/
export declare class GoogleChromeManagementV1CountChromeAppRequestsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    requestedApps?: GoogleChromeManagementV1ChromeAppRequest[];
    totalSize?: number;
}
