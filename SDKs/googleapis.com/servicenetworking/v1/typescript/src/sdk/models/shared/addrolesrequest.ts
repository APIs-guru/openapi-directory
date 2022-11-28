import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyBinding } from "./policybinding";



// AddRolesRequest
/** 
 * Request for AddRoles to allow Service Producers to add roles in the shared VPC host project for them to use.
**/
export class AddRolesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumerNetwork" })
  consumerNetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=policyBinding", elemType: PolicyBinding })
  policyBinding?: PolicyBinding[];
}
