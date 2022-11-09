import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NodeTaint } from "./nodetaint";


// NodeTaints
/** 
 * Collection of Kubernetes [node taints](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration).
**/
export class NodeTaints extends SpeakeasyBase {
  @Metadata({ data: "json, name=taints", elemType: shared.NodeTaint })
  taints?: NodeTaint[];
}
