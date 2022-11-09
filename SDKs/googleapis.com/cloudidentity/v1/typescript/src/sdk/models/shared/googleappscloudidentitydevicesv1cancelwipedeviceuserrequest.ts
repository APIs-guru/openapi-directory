import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserRequest
/** 
 * Request message for cancelling an unfinished user account wipe.
**/
export class GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=customer" })
  customer?: string;
}
