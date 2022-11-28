import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleHomeEnterpriseSdmV1Device } from "./googlehomeenterprisesdmv1device";



// GoogleHomeEnterpriseSdmV1ListDevicesResponse
/** 
 * Response message for SmartDeviceManagementService.ListDevices
**/
export class GoogleHomeEnterpriseSdmV1ListDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devices", elemType: GoogleHomeEnterpriseSdmV1Device })
  devices?: GoogleHomeEnterpriseSdmV1Device[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
