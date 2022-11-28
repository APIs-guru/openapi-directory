import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsCloudidentityDevicesV1ApproveDeviceUserRequest
/** 
 * Request message for approving the device to access user data.
**/
export class GoogleAppsCloudidentityDevicesV1ApproveDeviceUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer?: string;
}
