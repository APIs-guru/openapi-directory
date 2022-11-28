import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1Device } from "./googlechromemanagementv1device";



// GoogleChromeManagementV1FindInstalledAppDevicesResponse
/** 
 * Response containing a list of devices with queried app installed.
**/
export class GoogleChromeManagementV1FindInstalledAppDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devices", elemType: GoogleChromeManagementV1Device })
  devices?: GoogleChromeManagementV1Device[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
