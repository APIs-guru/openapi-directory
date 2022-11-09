import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GcfsConfig } from "./gcfsconfig";
import { NodePoolLoggingConfig } from "./nodepoolloggingconfig";


// NodeConfigDefaults
/** 
 * Subset of NodeConfig message that has defaults.
**/
export class NodeConfigDefaults extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcfsConfig" })
  gcfsConfig?: GcfsConfig;

  @Metadata({ data: "json, name=loggingConfig" })
  loggingConfig?: NodePoolLoggingConfig;
}
