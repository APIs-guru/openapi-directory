import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppDevExperienceFeatureState } from "./appdevexperiencefeaturestate";
import { FeatureState } from "./featurestate";



// CommonFeatureState1
/** 
 * CommonFeatureState contains Hub-wide Feature status information.
**/
export class CommonFeatureState1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appdevexperience" })
  appdevexperience?: AppDevExperienceFeatureState;

  @SpeakeasyMetadata({ data: "json, name=fleetobservability" })
  fleetobservability?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: FeatureState;
}
