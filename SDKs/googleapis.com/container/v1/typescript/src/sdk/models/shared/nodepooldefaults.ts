import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NodeConfigDefaults } from "./nodeconfigdefaults";



// NodePoolDefaults
/** 
 * Subset of Nodepool message that has defaults.
**/
export class NodePoolDefaults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nodeConfigDefaults" })
  nodeConfigDefaults?: NodeConfigDefaults;
}
