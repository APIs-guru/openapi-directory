import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1DeviceAueCountReport } from "./googlechromemanagementv1deviceauecountreport";



// GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse
/** 
 * Response containing a list of devices expiring in each month of a selected time frame. Counts are grouped by model and Auto Update Expiration date.
**/
export class GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceAueCountReports", elemType: GoogleChromeManagementV1DeviceAueCountReport })
  deviceAueCountReports?: GoogleChromeManagementV1DeviceAueCountReport[];
}
