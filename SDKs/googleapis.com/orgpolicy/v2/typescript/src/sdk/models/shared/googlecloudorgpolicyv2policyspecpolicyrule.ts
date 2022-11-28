import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeExpr } from "./googletypeexpr";
import { GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues } from "./googlecloudorgpolicyv2policyspecpolicyrulestringvalues";



// GoogleCloudOrgpolicyV2PolicySpecPolicyRule
/** 
 * A rule used to express this policy.
**/
export class GoogleCloudOrgpolicyV2PolicySpecPolicyRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowAll" })
  allowAll?: boolean;

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: GoogleTypeExpr;

  @SpeakeasyMetadata({ data: "json, name=denyAll" })
  denyAll?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enforce" })
  enforce?: boolean;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues;
}
