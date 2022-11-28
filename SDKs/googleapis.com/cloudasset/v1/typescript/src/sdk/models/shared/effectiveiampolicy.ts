import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyInfo } from "./policyinfo";



// EffectiveIamPolicy
/** 
 * The effective IAM policies on one resource.
**/
export class EffectiveIamPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fullResourceName" })
  fullResourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=policies", elemType: PolicyInfo })
  policies?: PolicyInfo[];
}
