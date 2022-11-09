import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleChromeManagementV1ChromeAppRequest } from "./googlechromemanagementv1chromeapprequest";


// GoogleChromeManagementV1CountChromeAppRequestsResponse
/** 
 * Response containing summary of requested app installations.
**/
export class GoogleChromeManagementV1CountChromeAppRequestsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=requestedApps", elemType: shared.GoogleChromeManagementV1ChromeAppRequest })
  requestedApps?: GoogleChromeManagementV1ChromeAppRequest[];

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
