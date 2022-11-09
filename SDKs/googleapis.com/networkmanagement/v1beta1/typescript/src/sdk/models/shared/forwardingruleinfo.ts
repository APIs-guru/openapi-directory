import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ForwardingRuleInfo
/** 
 * For display only. Metadata associated with a Compute Engine forwarding rule.
**/
export class ForwardingRuleInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=matchedPortRange" })
  matchedPortRange?: string;

  @Metadata({ data: "json, name=matchedProtocol" })
  matchedProtocol?: string;

  @Metadata({ data: "json, name=networkUri" })
  networkUri?: string;

  @Metadata({ data: "json, name=target" })
  target?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=vip" })
  vip?: string;
}
