import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for NetworkPolicy. This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes.
**/
export declare class NetworkPolicyConfig extends SpeakeasyBase {
    disabled?: boolean;
}
