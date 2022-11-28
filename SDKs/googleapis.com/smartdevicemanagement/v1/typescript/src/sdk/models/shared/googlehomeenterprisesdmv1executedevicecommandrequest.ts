import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest
/** 
 * Request message for SmartDeviceManagementService.ExecuteDeviceCommand
**/
export class GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command?: string;

  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: Map<string, any>;
}
