import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceConfigInput } from "./instanceconfig";



// CreateInstanceConfigRequestInput
/** 
 * The request for CreateInstanceConfigRequest.
**/
export class CreateInstanceConfigRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceConfig" })
  instanceConfig?: InstanceConfigInput;

  @SpeakeasyMetadata({ data: "json, name=instanceConfigId" })
  instanceConfigId?: string;

  @SpeakeasyMetadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
