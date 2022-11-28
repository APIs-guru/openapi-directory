import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1BrowserVersion } from "./googlechromemanagementv1browserversion";
/**
 * Response containing requested browser versions details and counts.
**/
export declare class GoogleChromeManagementV1CountChromeVersionsResponse extends SpeakeasyBase {
    browserVersions?: GoogleChromeManagementV1BrowserVersion[];
    nextPageToken?: string;
    totalSize?: number;
}
