import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1BrowserVersion } from "./googlechromemanagementv1browserversion";



// GoogleChromeManagementV1CountChromeVersionsResponse
/** 
 * Response containing requested browser versions details and counts.
**/
export class GoogleChromeManagementV1CountChromeVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=browserVersions", elemType: GoogleChromeManagementV1BrowserVersion })
  browserVersions?: GoogleChromeManagementV1BrowserVersion[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
