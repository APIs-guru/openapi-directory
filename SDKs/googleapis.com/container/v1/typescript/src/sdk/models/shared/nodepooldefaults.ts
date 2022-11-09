import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NodeConfigDefaults } from "./nodeconfigdefaults";


// NodePoolDefaults
/** 
 * Subset of Nodepool message that has defaults.
**/
export class NodePoolDefaults extends SpeakeasyBase {
  @Metadata({ data: "json, name=nodeConfigDefaults" })
  nodeConfigDefaults?: NodeConfigDefaults;
}
