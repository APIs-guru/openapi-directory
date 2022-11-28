import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1Device } from "./googlechromemanagementv1device";
/**
 * Response containing a list of devices with queried app installed.
**/
export declare class GoogleChromeManagementV1FindInstalledAppDevicesResponse extends SpeakeasyBase {
    devices?: GoogleChromeManagementV1Device[];
    nextPageToken?: string;
    totalSize?: number;
}
