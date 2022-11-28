import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyBinding } from "./policybinding";



// TenantProjectPolicy
/** 
 * Describes policy settings that can be applied to a newly created tenant project.
**/
export class TenantProjectPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policyBindings", elemType: PolicyBinding })
  policyBindings?: PolicyBinding[];
}
