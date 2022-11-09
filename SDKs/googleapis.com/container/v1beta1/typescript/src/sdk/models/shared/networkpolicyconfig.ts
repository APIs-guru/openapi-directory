import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NetworkPolicyConfig
/** 
 * Configuration for NetworkPolicy. This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes.
**/
export class NetworkPolicyConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;
}
