import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsCloudidentityDevicesV1WipeDeviceUserRequest
/** 
 * Request message for starting an account wipe on device.
**/
export class GoogleAppsCloudidentityDevicesV1WipeDeviceUserRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=customer" })
  customer?: string;
}
