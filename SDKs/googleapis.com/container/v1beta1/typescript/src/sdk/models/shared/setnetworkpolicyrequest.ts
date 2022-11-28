import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkPolicy } from "./networkpolicy";



// SetNetworkPolicyRequest
/** 
 * SetNetworkPolicyRequest enables/disables network policy for a cluster.
**/
export class SetNetworkPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=networkPolicy" })
  networkPolicy?: NetworkPolicy;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
