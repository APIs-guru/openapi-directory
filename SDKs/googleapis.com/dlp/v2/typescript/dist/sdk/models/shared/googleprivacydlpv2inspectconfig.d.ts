import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2CustomInfoType } from "./googleprivacydlpv2custominfotype";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
import { GooglePrivacyDlpV2FindingLimits } from "./googleprivacydlpv2findinglimits";
import { GooglePrivacyDlpV2InspectionRuleSet } from "./googleprivacydlpv2inspectionruleset";
export declare enum GooglePrivacyDlpV2InspectConfigContentOptionsEnum {
    ContentUnspecified = "CONTENT_UNSPECIFIED",
    ContentText = "CONTENT_TEXT",
    ContentImage = "CONTENT_IMAGE"
}
export declare enum GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum {
    LikelihoodUnspecified = "LIKELIHOOD_UNSPECIFIED",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
/**
 * Configuration description of the scanning process. When used with redactContent only info_types and min_likelihood are currently used.
**/
export declare class GooglePrivacyDlpV2InspectConfig extends SpeakeasyBase {
    contentOptions?: GooglePrivacyDlpV2InspectConfigContentOptionsEnum[];
    customInfoTypes?: GooglePrivacyDlpV2CustomInfoType[];
    excludeInfoTypes?: boolean;
    includeQuote?: boolean;
    infoTypes?: GooglePrivacyDlpV2InfoType[];
    limits?: GooglePrivacyDlpV2FindingLimits;
    minLikelihood?: GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum;
    ruleSet?: GooglePrivacyDlpV2InspectionRuleSet[];
}
