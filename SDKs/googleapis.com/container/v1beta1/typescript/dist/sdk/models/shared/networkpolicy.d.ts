import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NetworkPolicyProviderEnum {
    ProviderUnspecified = "PROVIDER_UNSPECIFIED",
    Calico = "CALICO"
}
/**
 * Configuration options for the NetworkPolicy feature. https://kubernetes.io/docs/concepts/services-networking/networkpolicies/
**/
export declare class NetworkPolicy extends SpeakeasyBase {
    enabled?: boolean;
    provider?: NetworkPolicyProviderEnum;
}
