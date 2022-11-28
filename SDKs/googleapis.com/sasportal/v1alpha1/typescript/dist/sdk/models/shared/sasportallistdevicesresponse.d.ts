import { SpeakeasyBase } from "../../../internal/utils";
import { SasPortalDevice } from "./sasportaldevice";
/**
 * Response for ListDevices.
**/
export declare class SasPortalListDevicesResponse extends SpeakeasyBase {
    devices?: SasPortalDevice[];
    nextPageToken?: string;
}
