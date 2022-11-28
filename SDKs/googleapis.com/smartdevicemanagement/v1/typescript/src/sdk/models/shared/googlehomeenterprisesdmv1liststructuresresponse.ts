import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleHomeEnterpriseSdmV1Structure } from "./googlehomeenterprisesdmv1structure";



// GoogleHomeEnterpriseSdmV1ListStructuresResponse
/** 
 * Response message for SmartDeviceManagementService.ListStructures
**/
export class GoogleHomeEnterpriseSdmV1ListStructuresResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=structures", elemType: GoogleHomeEnterpriseSdmV1Structure })
  structures?: GoogleHomeEnterpriseSdmV1Structure[];
}
