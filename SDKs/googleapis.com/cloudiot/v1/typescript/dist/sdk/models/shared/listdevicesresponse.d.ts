import { SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";
/**
 * Response for `ListDevices`.
**/
export declare class ListDevicesResponse extends SpeakeasyBase {
    devices?: Device[];
    nextPageToken?: string;
}
