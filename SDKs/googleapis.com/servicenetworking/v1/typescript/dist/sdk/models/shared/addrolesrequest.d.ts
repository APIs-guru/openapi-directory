import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyBinding } from "./policybinding";
/**
 * Request for AddRoles to allow Service Producers to add roles in the shared VPC host project for them to use.
**/
export declare class AddRolesRequest extends SpeakeasyBase {
    consumerNetwork?: string;
    policyBinding?: PolicyBinding[];
}
