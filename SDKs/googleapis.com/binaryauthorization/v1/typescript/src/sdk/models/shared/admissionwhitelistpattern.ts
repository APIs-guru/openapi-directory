import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdmissionWhitelistPattern
/** 
 * An admission allowlist pattern exempts images from checks by admission rules.
**/
export class AdmissionWhitelistPattern extends SpeakeasyBase {
  @Metadata({ data: "json, name=namePattern" })
  namePattern?: string;
}
