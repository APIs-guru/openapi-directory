import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LocalControllerState } from "./localcontrollerstate";
import { AnthosVmSubFeatureState } from "./anthosvmsubfeaturestate";


// AnthosVmMembershipState
/** 
 * AnthosVMFeatureState contains the state of the AnthosVM feature. It represents the actual state in the cluster, while the AnthosVMMembershipSpec represents the desired state.
**/
export class AnthosVmMembershipState extends SpeakeasyBase {
  @Metadata({ data: "json, name=localControllerState" })
  localControllerState?: LocalControllerState;

  @Metadata({ data: "json, name=subfeatureState", elemType: shared.AnthosVmSubFeatureState })
  subfeatureState?: AnthosVmSubFeatureState[];
}
