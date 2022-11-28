import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse
/** 
 * Response message for SmartDeviceManagementService.ExecuteDeviceCommand
**/
export class GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: Map<string, any>;
}
