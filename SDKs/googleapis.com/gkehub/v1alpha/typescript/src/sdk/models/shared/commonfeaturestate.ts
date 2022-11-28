import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppDevExperienceFeatureState } from "./appdevexperiencefeaturestate";
import { ServiceMeshFeatureState } from "./servicemeshfeaturestate";
import { FeatureState } from "./featurestate";



// CommonFeatureState
/** 
 * CommonFeatureState contains Hub-wide Feature status information.
**/
export class CommonFeatureState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appdevexperience" })
  appdevexperience?: AppDevExperienceFeatureState;

  @SpeakeasyMetadata({ data: "json, name=fleetobservability" })
  fleetobservability?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=servicemesh" })
  servicemesh?: ServiceMeshFeatureState;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: FeatureState;
}
