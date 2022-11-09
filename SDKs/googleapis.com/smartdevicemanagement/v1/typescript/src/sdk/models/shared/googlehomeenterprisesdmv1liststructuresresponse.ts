import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleHomeEnterpriseSdmV1Structure } from "./googlehomeenterprisesdmv1structure";


// GoogleHomeEnterpriseSdmV1ListStructuresResponse
/** 
 * Response message for SmartDeviceManagementService.ListStructures
**/
export class GoogleHomeEnterpriseSdmV1ListStructuresResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=structures", elemType: shared.GoogleHomeEnterpriseSdmV1Structure })
  structures?: GoogleHomeEnterpriseSdmV1Structure[];
}
