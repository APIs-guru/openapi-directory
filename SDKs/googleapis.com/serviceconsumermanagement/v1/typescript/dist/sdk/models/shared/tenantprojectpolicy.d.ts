import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyBinding } from "./policybinding";
/**
 * Describes policy settings that can be applied to a newly created tenant project.
**/
export declare class TenantProjectPolicy extends SpeakeasyBase {
    policyBindings?: PolicyBinding[];
}
