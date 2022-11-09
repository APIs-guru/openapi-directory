import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ValidationCa } from "./validationca";


// MtlsPolicy
/** 
 * Specification of the MTLSPolicy.
**/
export class MtlsPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientValidationCa", elemType: shared.ValidationCa })
  clientValidationCa?: ValidationCa[];
}
