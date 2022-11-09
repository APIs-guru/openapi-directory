import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResponsePolicyRuleLocalData } from "./responsepolicyrulelocaldata";

export enum ResponsePolicyRuleBehaviorEnum {
    BehaviorUnspecified = "behaviorUnspecified"
,    BypassResponsePolicy = "bypassResponsePolicy"
}


// ResponsePolicyRule
/** 
 * A Response Policy Rule is a selector that applies its behavior to queries that match the selector. Selectors are DNS names, which may be wildcards or exact matches. Each DNS query subject to a Response Policy matches at most one ResponsePolicyRule, as identified by the dns_name field with the longest matching suffix.
**/
export class ResponsePolicyRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=behavior" })
  behavior?: ResponsePolicyRuleBehaviorEnum;

  @Metadata({ data: "json, name=dnsName" })
  dnsName?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=localData" })
  localData?: ResponsePolicyRuleLocalData;

  @Metadata({ data: "json, name=ruleName" })
  ruleName?: string;
}
