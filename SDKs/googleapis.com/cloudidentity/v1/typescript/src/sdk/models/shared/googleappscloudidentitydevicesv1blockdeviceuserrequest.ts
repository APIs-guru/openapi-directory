import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsCloudidentityDevicesV1BlockDeviceUserRequest
/** 
 * Request message for blocking account on device.
**/
export class GoogleAppsCloudidentityDevicesV1BlockDeviceUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer?: string;
}
