import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AppDevExperienceFeatureState } from "./appdevexperiencefeaturestate";
import { FeatureState } from "./featurestate";


// CommonFeatureState
/** 
 * CommonFeatureState contains Hub-wide Feature status information.
**/
export class CommonFeatureState extends SpeakeasyBase {
  @Metadata({ data: "json, name=appdevexperience" })
  appdevexperience?: AppDevExperienceFeatureState;

  @Metadata({ data: "json, name=state" })
  state?: FeatureState;
}
