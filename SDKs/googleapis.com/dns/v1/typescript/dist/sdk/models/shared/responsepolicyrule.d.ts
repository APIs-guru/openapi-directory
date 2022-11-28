import { SpeakeasyBase } from "../../../internal/utils";
import { ResponsePolicyRuleLocalData } from "./responsepolicyrulelocaldata";
export declare enum ResponsePolicyRuleBehaviorEnum {
    BehaviorUnspecified = "behaviorUnspecified",
    BypassResponsePolicy = "bypassResponsePolicy"
}
/**
 * A Response Policy Rule is a selector that applies its behavior to queries that match the selector. Selectors are DNS names, which may be wildcards or exact matches. Each DNS query subject to a Response Policy matches at most one ResponsePolicyRule, as identified by the dns_name field with the longest matching suffix.
**/
export declare class ResponsePolicyRule extends SpeakeasyBase {
    behavior?: ResponsePolicyRuleBehaviorEnum;
    dnsName?: string;
    kind?: string;
    localData?: ResponsePolicyRuleLocalData;
    ruleName?: string;
}
