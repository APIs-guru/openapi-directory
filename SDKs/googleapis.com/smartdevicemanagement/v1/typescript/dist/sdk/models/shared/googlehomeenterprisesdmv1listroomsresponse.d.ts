import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleHomeEnterpriseSdmV1Room } from "./googlehomeenterprisesdmv1room";
/**
 * Response message for SmartDeviceManagementService.ListRooms
**/
export declare class GoogleHomeEnterpriseSdmV1ListRoomsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    rooms?: GoogleHomeEnterpriseSdmV1Room[];
}
