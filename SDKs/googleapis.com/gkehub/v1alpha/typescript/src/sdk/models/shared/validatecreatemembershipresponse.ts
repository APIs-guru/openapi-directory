import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ValidationResult } from "./validationresult";



// ValidateCreateMembershipResponse
/** 
 * Response message for the `GkeHub.ValidateCreateMembership` method.
**/
export class ValidateCreateMembershipResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=validationResults", elemType: ValidationResult })
  validationResults?: ValidationResult[];
}
