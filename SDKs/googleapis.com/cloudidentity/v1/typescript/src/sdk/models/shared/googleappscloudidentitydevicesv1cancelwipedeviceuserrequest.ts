import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserRequest
/** 
 * Request message for cancelling an unfinished user account wipe.
**/
export class GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer?: string;
}
