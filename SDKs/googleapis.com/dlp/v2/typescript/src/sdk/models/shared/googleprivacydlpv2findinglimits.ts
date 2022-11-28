import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InfoTypeLimit } from "./googleprivacydlpv2infotypelimit";



// GooglePrivacyDlpV2FindingLimits
/** 
 * Configuration to control the number of findings returned for inspection. This is not used for de-identification or data profiling. When redacting sensitive data from images, finding limits don't apply. They can cause unexpected or inconsistent results, where only some data is redacted. Don't include finding limits in RedactImage requests. Otherwise, Cloud DLP returns an error.
**/
export class GooglePrivacyDlpV2FindingLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxFindingsPerInfoType", elemType: GooglePrivacyDlpV2InfoTypeLimit })
  maxFindingsPerInfoType?: GooglePrivacyDlpV2InfoTypeLimit[];

  @SpeakeasyMetadata({ data: "json, name=maxFindingsPerItem" })
  maxFindingsPerItem?: number;

  @SpeakeasyMetadata({ data: "json, name=maxFindingsPerRequest" })
  maxFindingsPerRequest?: number;
}
