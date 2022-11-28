import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2DetectionRule } from "./googleprivacydlpv2detectionrule";
import { GooglePrivacyDlpV2Dictionary } from "./googleprivacydlpv2dictionary";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
import { GooglePrivacyDlpV2Regex } from "./googleprivacydlpv2regex";
import { GooglePrivacyDlpV2StoredType } from "./googleprivacydlpv2storedtype";
export declare enum GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum {
    ExclusionTypeUnspecified = "EXCLUSION_TYPE_UNSPECIFIED",
    ExclusionTypeExclude = "EXCLUSION_TYPE_EXCLUDE"
}
export declare enum GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum {
    LikelihoodUnspecified = "LIKELIHOOD_UNSPECIFIED",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
/**
 * Custom information type provided by the user. Used to find domain-specific sensitive information configurable to the data in question.
**/
export declare class GooglePrivacyDlpV2CustomInfoType extends SpeakeasyBase {
    detectionRules?: GooglePrivacyDlpV2DetectionRule[];
    dictionary?: GooglePrivacyDlpV2Dictionary;
    exclusionType?: GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum;
    infoType?: GooglePrivacyDlpV2InfoType;
    likelihood?: GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum;
    regex?: GooglePrivacyDlpV2Regex;
    storedType?: GooglePrivacyDlpV2StoredType;
    surrogateType?: Map<string, any>;
}
