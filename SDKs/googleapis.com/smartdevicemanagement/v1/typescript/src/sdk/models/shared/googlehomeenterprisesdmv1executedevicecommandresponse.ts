import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse
/** 
 * Response message for SmartDeviceManagementService.ExecuteDeviceCommand
**/
export class GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=results" })
  results?: Map<string, any>;
}
