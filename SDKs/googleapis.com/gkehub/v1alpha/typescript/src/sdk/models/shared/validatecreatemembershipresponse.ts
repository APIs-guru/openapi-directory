import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ValidationResult } from "./validationresult";


// ValidateCreateMembershipResponse
/** 
 * Response message for the `GkeHub.ValidateCreateMembership` method.
**/
export class ValidateCreateMembershipResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=validationResults", elemType: shared.ValidationResult })
  validationResults?: ValidationResult[];
}
