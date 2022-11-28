import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ValidationCa } from "./validationca";



// MtlsPolicy
/** 
 * Specification of the MTLSPolicy.
**/
export class MtlsPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientValidationCa", elemType: ValidationCa })
  clientValidationCa?: ValidationCa[];
}
