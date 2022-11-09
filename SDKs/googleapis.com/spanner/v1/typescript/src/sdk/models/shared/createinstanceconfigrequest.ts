import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceConfig } from "./instanceconfig";


// CreateInstanceConfigRequest
/** 
 * The request for CreateInstanceConfigRequest.
**/
export class CreateInstanceConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceConfig" })
  instanceConfig?: InstanceConfig;

  @Metadata({ data: "json, name=instanceConfigId" })
  instanceConfigId?: string;

  @Metadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
