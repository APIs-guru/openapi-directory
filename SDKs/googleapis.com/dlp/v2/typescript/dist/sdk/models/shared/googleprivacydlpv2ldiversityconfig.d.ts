import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
/**
 * l-diversity metric, used for analysis of reidentification risk.
**/
export declare class GooglePrivacyDlpV2LDiversityConfig extends SpeakeasyBase {
    quasiIds?: GooglePrivacyDlpV2FieldId[];
    sensitiveAttribute?: GooglePrivacyDlpV2FieldId;
}
