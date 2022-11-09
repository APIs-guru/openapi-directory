import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleChromeManagementV1Device } from "./googlechromemanagementv1device";


// GoogleChromeManagementV1FindInstalledAppDevicesResponse
/** 
 * Response containing a list of devices with queried app installed.
**/
export class GoogleChromeManagementV1FindInstalledAppDevicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=devices", elemType: shared.GoogleChromeManagementV1Device })
  devices?: GoogleChromeManagementV1Device[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
