import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleHomeEnterpriseSdmV1Room } from "./googlehomeenterprisesdmv1room";



// GoogleHomeEnterpriseSdmV1ListRoomsResponse
/** 
 * Response message for SmartDeviceManagementService.ListRooms
**/
export class GoogleHomeEnterpriseSdmV1ListRoomsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=rooms", elemType: GoogleHomeEnterpriseSdmV1Room })
  rooms?: GoogleHomeEnterpriseSdmV1Room[];
}
