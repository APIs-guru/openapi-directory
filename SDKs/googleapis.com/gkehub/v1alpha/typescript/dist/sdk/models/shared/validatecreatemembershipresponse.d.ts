import { SpeakeasyBase } from "../../../internal/utils";
import { ValidationResult } from "./validationresult";
/**
 * Response message for the `GkeHub.ValidateCreateMembership` method.
**/
export declare class ValidateCreateMembershipResponse extends SpeakeasyBase {
    validationResults?: ValidationResult[];
}
