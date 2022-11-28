import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1DeviceAueCountReport } from "./googlechromemanagementv1deviceauecountreport";
/**
 * Response containing a list of devices expiring in each month of a selected time frame. Counts are grouped by model and Auto Update Expiration date.
**/
export declare class GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse extends SpeakeasyBase {
    deviceAueCountReports?: GoogleChromeManagementV1DeviceAueCountReport[];
}
