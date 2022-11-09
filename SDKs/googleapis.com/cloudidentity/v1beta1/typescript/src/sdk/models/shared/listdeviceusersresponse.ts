import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceUser } from "./deviceuser";


// ListDeviceUsersResponse
/** 
 * Response message that is returned from the ListDeviceUsers method.
**/
export class ListDeviceUsersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceUsers", elemType: shared.DeviceUser })
  deviceUsers?: DeviceUser[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
