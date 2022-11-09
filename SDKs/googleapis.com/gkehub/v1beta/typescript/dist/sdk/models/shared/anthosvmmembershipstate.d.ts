import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LocalControllerState } from "./localcontrollerstate";
import { AnthosVmSubFeatureState } from "./anthosvmsubfeaturestate";
/**
 * AnthosVMFeatureState contains the state of the AnthosVM feature. It represents the actual state in the cluster, while the AnthosVMMembershipSpec represents the desired state.
**/
export declare class AnthosVmMembershipState extends SpeakeasyBase {
    localControllerState?: LocalControllerState;
    subfeatureState?: AnthosVmSubFeatureState[];
}
