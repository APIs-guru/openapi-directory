import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdmissionWhitelistPattern
/** 
 * An admission allowlist pattern exempts images from checks by admission rules.
**/
export class AdmissionWhitelistPattern extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=namePattern" })
  namePattern?: string;
}
