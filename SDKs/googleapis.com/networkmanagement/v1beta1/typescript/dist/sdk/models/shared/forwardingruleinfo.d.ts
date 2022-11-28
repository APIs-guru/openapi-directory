import { SpeakeasyBase } from "../../../internal/utils";
/**
 * For display only. Metadata associated with a Compute Engine forwarding rule.
**/
export declare class ForwardingRuleInfo extends SpeakeasyBase {
    displayName?: string;
    matchedPortRange?: string;
    matchedProtocol?: string;
    networkUri?: string;
    target?: string;
    uri?: string;
    vip?: string;
}
