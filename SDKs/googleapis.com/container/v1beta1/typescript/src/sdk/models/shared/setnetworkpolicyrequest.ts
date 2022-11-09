import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NetworkPolicy } from "./networkpolicy";


// SetNetworkPolicyRequest
/** 
 * SetNetworkPolicyRequest enables/disables network policy for a cluster.
**/
export class SetNetworkPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=networkPolicy" })
  networkPolicy?: NetworkPolicy;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
