import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleChromeManagementV1DeviceHardwareCountReport } from "./googlechromemanagementv1devicehardwarecountreport";
import { GoogleChromeManagementV1DeviceHardwareCountReport } from "./googlechromemanagementv1devicehardwarecountreport";
import { GoogleChromeManagementV1DeviceHardwareCountReport } from "./googlechromemanagementv1devicehardwarecountreport";
import { GoogleChromeManagementV1DeviceHardwareCountReport } from "./googlechromemanagementv1devicehardwarecountreport";


// GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse
/** 
 * Response containing a list of devices with a specific type of hardware specification from the requested hardware type.
**/
export class GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpuReports", elemType: shared.GoogleChromeManagementV1DeviceHardwareCountReport })
  cpuReports?: GoogleChromeManagementV1DeviceHardwareCountReport[];

  @Metadata({ data: "json, name=memoryReports", elemType: shared.GoogleChromeManagementV1DeviceHardwareCountReport })
  memoryReports?: GoogleChromeManagementV1DeviceHardwareCountReport[];

  @Metadata({ data: "json, name=modelReports", elemType: shared.GoogleChromeManagementV1DeviceHardwareCountReport })
  modelReports?: GoogleChromeManagementV1DeviceHardwareCountReport[];

  @Metadata({ data: "json, name=storageReports", elemType: shared.GoogleChromeManagementV1DeviceHardwareCountReport })
  storageReports?: GoogleChromeManagementV1DeviceHardwareCountReport[];
}
