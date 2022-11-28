import { SpeakeasyBase } from "../../../internal/utils";
import { AppDevExperienceFeatureState } from "./appdevexperiencefeaturestate";
import { ServiceMeshFeatureState } from "./servicemeshfeaturestate";
import { FeatureState } from "./featurestate";
/**
 * CommonFeatureState contains Hub-wide Feature status information.
**/
export declare class CommonFeatureState extends SpeakeasyBase {
    appdevexperience?: AppDevExperienceFeatureState;
    fleetobservability?: Map<string, any>;
    servicemesh?: ServiceMeshFeatureState;
    state?: FeatureState;
}
