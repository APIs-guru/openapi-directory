import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkTags } from "./networktags";



// NodePoolAutoConfig
/** 
 * node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters
**/
export class NodePoolAutoConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=networkTags" })
  networkTags?: NetworkTags;
}
