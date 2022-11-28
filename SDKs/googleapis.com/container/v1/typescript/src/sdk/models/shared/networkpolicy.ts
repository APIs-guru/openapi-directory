import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NetworkPolicyProviderEnum {
    ProviderUnspecified = "PROVIDER_UNSPECIFIED",
    Calico = "CALICO"
}


// NetworkPolicy
/** 
 * Configuration options for the NetworkPolicy feature. https://kubernetes.io/docs/concepts/services-networking/networkpolicies/
**/
export class NetworkPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: NetworkPolicyProviderEnum;
}
