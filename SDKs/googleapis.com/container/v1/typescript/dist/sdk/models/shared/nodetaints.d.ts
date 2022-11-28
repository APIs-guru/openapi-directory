import { SpeakeasyBase } from "../../../internal/utils";
import { NodeTaint } from "./nodetaint";
/**
 * Collection of Kubernetes [node taints](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration).
**/
export declare class NodeTaints extends SpeakeasyBase {
    taints?: NodeTaint[];
}
