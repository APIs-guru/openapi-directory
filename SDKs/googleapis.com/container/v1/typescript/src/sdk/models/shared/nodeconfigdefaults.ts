import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GcfsConfig } from "./gcfsconfig";
import { NodePoolLoggingConfig } from "./nodepoolloggingconfig";



// NodeConfigDefaults
/** 
 * Subset of NodeConfig message that has defaults.
**/
export class NodeConfigDefaults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcfsConfig" })
  gcfsConfig?: GcfsConfig;

  @SpeakeasyMetadata({ data: "json, name=loggingConfig" })
  loggingConfig?: NodePoolLoggingConfig;
}
