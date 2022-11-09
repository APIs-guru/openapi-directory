import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleHomeEnterpriseSdmV1Device } from "./googlehomeenterprisesdmv1device";


// GoogleHomeEnterpriseSdmV1ListDevicesResponse
/** 
 * Response message for SmartDeviceManagementService.ListDevices
**/
export class GoogleHomeEnterpriseSdmV1ListDevicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=devices", elemType: shared.GoogleHomeEnterpriseSdmV1Device })
  devices?: GoogleHomeEnterpriseSdmV1Device[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
