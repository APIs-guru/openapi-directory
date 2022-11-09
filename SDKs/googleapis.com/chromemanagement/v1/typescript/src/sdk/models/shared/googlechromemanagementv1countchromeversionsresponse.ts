import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleChromeManagementV1BrowserVersion } from "./googlechromemanagementv1browserversion";


// GoogleChromeManagementV1CountChromeVersionsResponse
/** 
 * Response containing requested browser versions details and counts.
**/
export class GoogleChromeManagementV1CountChromeVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=browserVersions", elemType: shared.GoogleChromeManagementV1BrowserVersion })
  browserVersions?: GoogleChromeManagementV1BrowserVersion[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
