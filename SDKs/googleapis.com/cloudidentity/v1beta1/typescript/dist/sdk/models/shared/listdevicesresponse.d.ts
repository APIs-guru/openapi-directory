import { SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";
/**
 * Response message that is returned from the ListDevices method.
**/
export declare class ListDevicesResponse extends SpeakeasyBase {
    devices?: Device[];
    nextPageToken?: string;
}
