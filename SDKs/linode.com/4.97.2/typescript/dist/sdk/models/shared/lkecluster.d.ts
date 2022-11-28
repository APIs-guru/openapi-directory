import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Kubernetes cluster.
**/
export declare class LkeCluster extends SpeakeasyBase {
    created?: Date;
    id?: number;
    k8sVersion?: string;
    label?: string;
    region?: string;
    tags?: string[];
    updated?: Date;
}
