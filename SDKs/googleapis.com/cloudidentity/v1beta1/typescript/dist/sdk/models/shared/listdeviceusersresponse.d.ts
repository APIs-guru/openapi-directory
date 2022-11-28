import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceUser } from "./deviceuser";
/**
 * Response message that is returned from the ListDeviceUsers method.
**/
export declare class ListDeviceUsersResponse extends SpeakeasyBase {
    deviceUsers?: DeviceUser[];
    nextPageToken?: string;
}
