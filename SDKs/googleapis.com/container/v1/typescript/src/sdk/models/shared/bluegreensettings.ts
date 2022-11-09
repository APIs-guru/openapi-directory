import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StandardRolloutPolicy } from "./standardrolloutpolicy";


// BlueGreenSettings
/** 
 * Settings for blue-green upgrade.
**/
export class BlueGreenSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=nodePoolSoakDuration" })
  nodePoolSoakDuration?: string;

  @Metadata({ data: "json, name=standardRolloutPolicy" })
  standardRolloutPolicy?: StandardRolloutPolicy;
}
