import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1DeviceHardwareCountReport } from "./googlechromemanagementv1devicehardwarecountreport";



// GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse
/** 
 * Response containing a list of devices with a specific type of hardware specification from the requested hardware type.
**/
export class GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpuReports", elemType: GoogleChromeManagementV1DeviceHardwareCountReport })
  cpuReports?: GoogleChromeManagementV1DeviceHardwareCountReport[];

  @SpeakeasyMetadata({ data: "json, name=memoryReports", elemType: GoogleChromeManagementV1DeviceHardwareCountReport })
  memoryReports?: GoogleChromeManagementV1DeviceHardwareCountReport[];

  @SpeakeasyMetadata({ data: "json, name=modelReports", elemType: GoogleChromeManagementV1DeviceHardwareCountReport })
  modelReports?: GoogleChromeManagementV1DeviceHardwareCountReport[];

  @SpeakeasyMetadata({ data: "json, name=storageReports", elemType: GoogleChromeManagementV1DeviceHardwareCountReport })
  storageReports?: GoogleChromeManagementV1DeviceHardwareCountReport[];
}
