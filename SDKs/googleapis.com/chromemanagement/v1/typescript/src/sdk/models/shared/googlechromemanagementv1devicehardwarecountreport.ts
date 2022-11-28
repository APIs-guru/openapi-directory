import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleChromeManagementV1DeviceHardwareCountReport
/** 
 * Report for CountChromeDevicesPerHardwareSpecResponse, contains the count of devices with a unique hardware specification.
**/
export class GoogleChromeManagementV1DeviceHardwareCountReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket" })
  bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: string;
}
