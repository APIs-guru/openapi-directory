import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleHomeEnterpriseSdmV1Device } from "./googlehomeenterprisesdmv1device";
/**
 * Response message for SmartDeviceManagementService.ListDevices
**/
export declare class GoogleHomeEnterpriseSdmV1ListDevicesResponse extends SpeakeasyBase {
    devices?: GoogleHomeEnterpriseSdmV1Device[];
    nextPageToken?: string;
}
