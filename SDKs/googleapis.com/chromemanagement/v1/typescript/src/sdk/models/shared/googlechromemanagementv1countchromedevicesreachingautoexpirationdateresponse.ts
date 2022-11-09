import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleChromeManagementV1DeviceAueCountReport } from "./googlechromemanagementv1deviceauecountreport";


// GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse
/** 
 * Response containing a list of devices expiring in each month of a selected time frame. Counts are grouped by model and Auto Update Expiration date.
**/
export class GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceAueCountReports", elemType: shared.GoogleChromeManagementV1DeviceAueCountReport })
  deviceAueCountReports?: GoogleChromeManagementV1DeviceAueCountReport[];
}
