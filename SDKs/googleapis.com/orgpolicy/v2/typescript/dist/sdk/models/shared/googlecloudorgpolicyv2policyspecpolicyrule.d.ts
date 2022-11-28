import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeExpr } from "./googletypeexpr";
import { GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues } from "./googlecloudorgpolicyv2policyspecpolicyrulestringvalues";
/**
 * A rule used to express this policy.
**/
export declare class GoogleCloudOrgpolicyV2PolicySpecPolicyRule extends SpeakeasyBase {
    allowAll?: boolean;
    condition?: GoogleTypeExpr;
    denyAll?: boolean;
    enforce?: boolean;
    values?: GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues;
}
