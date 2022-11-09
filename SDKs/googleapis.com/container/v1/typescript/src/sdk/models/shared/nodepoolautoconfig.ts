import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NetworkTags } from "./networktags";


// NodePoolAutoConfig
/** 
 * Node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters.
**/
export class NodePoolAutoConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=networkTags" })
  networkTags?: NetworkTags;
}
