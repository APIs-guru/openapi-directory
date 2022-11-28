import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InfoTypeCategory } from "./googleprivacydlpv2infotypecategory";
import { GooglePrivacyDlpV2SensitivityScore } from "./googleprivacydlpv2sensitivityscore";
import { GooglePrivacyDlpV2VersionDescription } from "./googleprivacydlpv2versiondescription";
export declare enum GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum {
    EnumTypeUnspecified = "ENUM_TYPE_UNSPECIFIED",
    Inspect = "INSPECT",
    RiskAnalysis = "RISK_ANALYSIS"
}
/**
 * InfoType description.
**/
export declare class GooglePrivacyDlpV2InfoTypeDescription extends SpeakeasyBase {
    categories?: GooglePrivacyDlpV2InfoTypeCategory[];
    description?: string;
    displayName?: string;
    name?: string;
    sensitivityScore?: GooglePrivacyDlpV2SensitivityScore;
    supportedBy?: GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum[];
    versions?: GooglePrivacyDlpV2VersionDescription[];
}
