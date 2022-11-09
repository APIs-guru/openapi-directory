import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2Dictionary } from "./googleprivacydlpv2dictionary";
import { GooglePrivacyDlpV2ExcludeInfoTypes } from "./googleprivacydlpv2excludeinfotypes";
import { GooglePrivacyDlpV2Regex } from "./googleprivacydlpv2regex";

export enum GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum {
    MatchingTypeUnspecified = "MATCHING_TYPE_UNSPECIFIED"
,    MatchingTypeFullMatch = "MATCHING_TYPE_FULL_MATCH"
,    MatchingTypePartialMatch = "MATCHING_TYPE_PARTIAL_MATCH"
,    MatchingTypeInverseMatch = "MATCHING_TYPE_INVERSE_MATCH"
}


// GooglePrivacyDlpV2ExclusionRule
/** 
 * The rule that specifies conditions when findings of infoTypes specified in `InspectionRuleSet` are removed from results.
**/
export class GooglePrivacyDlpV2ExclusionRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=dictionary" })
  dictionary?: GooglePrivacyDlpV2Dictionary;

  @Metadata({ data: "json, name=excludeInfoTypes" })
  excludeInfoTypes?: GooglePrivacyDlpV2ExcludeInfoTypes;

  @Metadata({ data: "json, name=matchingType" })
  matchingType?: GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum;

  @Metadata({ data: "json, name=regex" })
  regex?: GooglePrivacyDlpV2Regex;
}
