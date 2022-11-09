import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SandboxBeneficiary
/** 
 * Beneficiary information
**/
export class SandboxBeneficiary extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
