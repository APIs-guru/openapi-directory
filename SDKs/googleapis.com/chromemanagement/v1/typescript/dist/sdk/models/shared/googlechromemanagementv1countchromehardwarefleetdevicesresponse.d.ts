import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1DeviceHardwareCountReport } from "./googlechromemanagementv1devicehardwarecountreport";
/**
 * Response containing a list of devices with a specific type of hardware specification from the requested hardware type.
**/
export declare class GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse extends SpeakeasyBase {
    cpuReports?: GoogleChromeManagementV1DeviceHardwareCountReport[];
    memoryReports?: GoogleChromeManagementV1DeviceHardwareCountReport[];
    modelReports?: GoogleChromeManagementV1DeviceHardwareCountReport[];
    storageReports?: GoogleChromeManagementV1DeviceHardwareCountReport[];
}
