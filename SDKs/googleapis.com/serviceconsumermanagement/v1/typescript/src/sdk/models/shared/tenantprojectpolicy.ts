import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PolicyBinding } from "./policybinding";


// TenantProjectPolicy
/** 
 * Describes policy settings that can be applied to a newly created tenant project.
**/
export class TenantProjectPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=policyBindings", elemType: shared.PolicyBinding })
  policyBindings?: PolicyBinding[];
}
