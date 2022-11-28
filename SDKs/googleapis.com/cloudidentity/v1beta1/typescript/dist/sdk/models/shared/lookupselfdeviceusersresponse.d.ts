import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response containing resource names of the DeviceUsers associated with the caller's credentials.
**/
export declare class LookupSelfDeviceUsersResponse extends SpeakeasyBase {
    customer?: string;
    names?: string[];
    nextPageToken?: string;
}
