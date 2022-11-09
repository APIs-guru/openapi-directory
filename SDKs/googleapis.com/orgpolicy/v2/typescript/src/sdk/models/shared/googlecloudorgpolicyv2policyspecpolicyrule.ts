import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleTypeExpr } from "./googletypeexpr";
import { GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues } from "./googlecloudorgpolicyv2policyspecpolicyrulestringvalues";


// GoogleCloudOrgpolicyV2PolicySpecPolicyRule
/** 
 * A rule used to express this policy.
**/
export class GoogleCloudOrgpolicyV2PolicySpecPolicyRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowAll" })
  allowAll?: boolean;

  @Metadata({ data: "json, name=condition" })
  condition?: GoogleTypeExpr;

  @Metadata({ data: "json, name=denyAll" })
  denyAll?: boolean;

  @Metadata({ data: "json, name=enforce" })
  enforce?: boolean;

  @Metadata({ data: "json, name=values" })
  values?: GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues;
}
