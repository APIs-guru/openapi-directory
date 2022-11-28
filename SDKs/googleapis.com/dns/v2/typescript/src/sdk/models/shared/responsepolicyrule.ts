import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResponsePolicyRuleLocalData } from "./responsepolicyrulelocaldata";


export enum ResponsePolicyRuleBehaviorEnum {
    BehaviorUnspecified = "BEHAVIOR_UNSPECIFIED",
    BypassResponsePolicy = "BYPASS_RESPONSE_POLICY"
}


// ResponsePolicyRule
/** 
 * A Response Policy Rule is a selector that applies its behavior to queries that match the selector. Selectors are DNS names, which may be wildcards or exact matches. Each DNS query subject to a Response Policy matches at most one ResponsePolicyRule, as identified by the dns_name field with the longest matching suffix.
**/
export class ResponsePolicyRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=behavior" })
  behavior?: ResponsePolicyRuleBehaviorEnum;

  @SpeakeasyMetadata({ data: "json, name=dnsName" })
  dnsName?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=localData" })
  localData?: ResponsePolicyRuleLocalData;

  @SpeakeasyMetadata({ data: "json, name=ruleName" })
  ruleName?: string;
}
