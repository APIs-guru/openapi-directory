import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1ChromeAppRequest } from "./googlechromemanagementv1chromeapprequest";



// GoogleChromeManagementV1CountChromeAppRequestsResponse
/** 
 * Response containing summary of requested app installations.
**/
export class GoogleChromeManagementV1CountChromeAppRequestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=requestedApps", elemType: GoogleChromeManagementV1ChromeAppRequest })
  requestedApps?: GoogleChromeManagementV1ChromeAppRequest[];

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
