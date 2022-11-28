import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InfoTypeLimit } from "./googleprivacydlpv2infotypelimit";
/**
 * Configuration to control the number of findings returned for inspection. This is not used for de-identification or data profiling. When redacting sensitive data from images, finding limits don't apply. They can cause unexpected or inconsistent results, where only some data is redacted. Don't include finding limits in RedactImage requests. Otherwise, Cloud DLP returns an error.
**/
export declare class GooglePrivacyDlpV2FindingLimits extends SpeakeasyBase {
    maxFindingsPerInfoType?: GooglePrivacyDlpV2InfoTypeLimit[];
    maxFindingsPerItem?: number;
    maxFindingsPerRequest?: number;
}
