import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LkeNodeStatusStatusEnum {
    Ready = "ready",
    NotReady = "not_ready"
}
/**
 * Status information for a Node which is a member of a Kubernetes cluster.
 *
**/
export declare class LkeNodeStatus extends SpeakeasyBase {
    id?: string;
    instanceId?: string;
    status?: LkeNodeStatusStatusEnum;
}
