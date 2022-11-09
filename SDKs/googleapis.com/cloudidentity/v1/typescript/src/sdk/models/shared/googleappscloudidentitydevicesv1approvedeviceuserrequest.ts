import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsCloudidentityDevicesV1ApproveDeviceUserRequest
/** 
 * Request message for approving the device to access user data.
**/
export class GoogleAppsCloudidentityDevicesV1ApproveDeviceUserRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=customer" })
  customer?: string;
}
