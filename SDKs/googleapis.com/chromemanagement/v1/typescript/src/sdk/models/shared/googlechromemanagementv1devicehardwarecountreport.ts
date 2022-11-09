import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleChromeManagementV1DeviceHardwareCountReport
/** 
 * Report for CountChromeDevicesPerHardwareSpecResponse, contains the count of devices with a unique hardware specification.
**/
export class GoogleChromeManagementV1DeviceHardwareCountReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=count" })
  count?: string;
}
