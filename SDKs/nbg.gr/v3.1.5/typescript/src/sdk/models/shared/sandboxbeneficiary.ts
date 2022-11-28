import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SandboxBeneficiary
/** 
 * Beneficiary information
**/
export class SandboxBeneficiary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
