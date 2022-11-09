import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest
/** 
 * Request message for SmartDeviceManagementService.ExecuteDeviceCommand
**/
export class GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command?: string;

  @Metadata({ data: "json, name=params" })
  params?: Map<string, any>;
}
