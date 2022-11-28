import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkTags } from "./networktags";
/**
 * node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters
**/
export declare class NodePoolAutoConfig extends SpeakeasyBase {
    networkTags?: NetworkTags;
}
