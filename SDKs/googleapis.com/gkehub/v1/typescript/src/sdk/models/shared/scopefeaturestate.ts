import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FeatureState } from "./featurestate";



// ScopeFeatureState
/** 
 * ScopeFeatureState contains Scope-wide Feature status information.
**/
export class ScopeFeatureState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: FeatureState;
}
