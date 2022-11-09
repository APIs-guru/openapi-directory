import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum NetworkPolicyProviderEnum {
    ProviderUnspecified = "PROVIDER_UNSPECIFIED"
,    Calico = "CALICO"
}


// NetworkPolicy
/** 
 * Configuration options for the NetworkPolicy feature. https://kubernetes.io/docs/concepts/services-networking/networkpolicies/
**/
export class NetworkPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=provider" })
  provider?: NetworkPolicyProviderEnum;
}
