import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StandardRolloutPolicy } from "./standardrolloutpolicy";



// BlueGreenSettings
/** 
 * Settings for blue-green upgrade.
**/
export class BlueGreenSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nodePoolSoakDuration" })
  nodePoolSoakDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=standardRolloutPolicy" })
  standardRolloutPolicy?: StandardRolloutPolicy;
}
