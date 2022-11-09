import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PolicyBinding } from "./policybinding";


// AddRolesRequest
/** 
 * Request for AddRoles to allow Service Producers to add roles in the shared VPC host project for them to use.
**/
export class AddRolesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=consumerNetwork" })
  consumerNetwork?: string;

  @Metadata({ data: "json, name=policyBinding", elemType: shared.PolicyBinding })
  policyBinding?: PolicyBinding[];
}
