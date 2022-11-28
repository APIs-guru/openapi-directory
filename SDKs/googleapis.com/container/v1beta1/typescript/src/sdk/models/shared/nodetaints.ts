import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NodeTaint } from "./nodetaint";



// NodeTaints
/** 
 * Collection of Kubernetes [node taints](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration).
**/
export class NodeTaints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taints", elemType: NodeTaint })
  taints?: NodeTaint[];
}
