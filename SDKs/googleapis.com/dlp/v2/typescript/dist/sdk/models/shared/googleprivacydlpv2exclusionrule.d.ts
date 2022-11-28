import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Dictionary } from "./googleprivacydlpv2dictionary";
import { GooglePrivacyDlpV2ExcludeByHotword } from "./googleprivacydlpv2excludebyhotword";
import { GooglePrivacyDlpV2ExcludeInfoTypes } from "./googleprivacydlpv2excludeinfotypes";
import { GooglePrivacyDlpV2Regex } from "./googleprivacydlpv2regex";
export declare enum GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum {
    MatchingTypeUnspecified = "MATCHING_TYPE_UNSPECIFIED",
    MatchingTypeFullMatch = "MATCHING_TYPE_FULL_MATCH",
    MatchingTypePartialMatch = "MATCHING_TYPE_PARTIAL_MATCH",
    MatchingTypeInverseMatch = "MATCHING_TYPE_INVERSE_MATCH"
}
/**
 * The rule that specifies conditions when findings of infoTypes specified in `InspectionRuleSet` are removed from results.
**/
export declare class GooglePrivacyDlpV2ExclusionRule extends SpeakeasyBase {
    dictionary?: GooglePrivacyDlpV2Dictionary;
    excludeByHotword?: GooglePrivacyDlpV2ExcludeByHotword;
    excludeInfoTypes?: GooglePrivacyDlpV2ExcludeInfoTypes;
    matchingType?: GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum;
    regex?: GooglePrivacyDlpV2Regex;
}
