import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PolicyInfo } from "./policyinfo";


// EffectiveIamPolicy
/** 
 * The effective IAM policies on one resource.
**/
export class EffectiveIamPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=fullResourceName" })
  fullResourceName?: string;

  @Metadata({ data: "json, name=policies", elemType: shared.PolicyInfo })
  policies?: PolicyInfo[];
}
