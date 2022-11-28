import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsCloudidentityDevicesV1WipeDeviceUserRequest
/** 
 * Request message for starting an account wipe on device.
**/
export class GoogleAppsCloudidentityDevicesV1WipeDeviceUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer?: string;
}
