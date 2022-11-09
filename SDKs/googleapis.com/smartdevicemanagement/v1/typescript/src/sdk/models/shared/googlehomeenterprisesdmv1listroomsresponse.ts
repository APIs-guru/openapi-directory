import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleHomeEnterpriseSdmV1Room } from "./googlehomeenterprisesdmv1room";


// GoogleHomeEnterpriseSdmV1ListRoomsResponse
/** 
 * Response message for SmartDeviceManagementService.ListRooms
**/
export class GoogleHomeEnterpriseSdmV1ListRoomsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=rooms", elemType: shared.GoogleHomeEnterpriseSdmV1Room })
  rooms?: GoogleHomeEnterpriseSdmV1Room[];
}
