import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceRegistry } from "./deviceregistry";
/**
 * Response for `ListDeviceRegistries`.
**/
export declare class ListDeviceRegistriesResponse extends SpeakeasyBase {
    deviceRegistries?: DeviceRegistry[];
    nextPageToken?: string;
}
