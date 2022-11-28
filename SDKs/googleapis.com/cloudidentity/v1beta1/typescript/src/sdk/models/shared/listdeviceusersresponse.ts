import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceUser } from "./deviceuser";



// ListDeviceUsersResponse
/** 
 * Response message that is returned from the ListDeviceUsers method.
**/
export class ListDeviceUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceUsers", elemType: DeviceUser })
  deviceUsers?: DeviceUser[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
