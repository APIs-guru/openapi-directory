import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkPolicy } from "./networkpolicy";
/**
 * SetNetworkPolicyRequest enables/disables network policy for a cluster.
**/
export declare class SetNetworkPolicyRequest extends SpeakeasyBase {
    clusterId?: string;
    name?: string;
    networkPolicy?: NetworkPolicy;
    projectId?: string;
    zone?: string;
}
