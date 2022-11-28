import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1PhraseMatchRule } from "./googlecloudcontactcenterinsightsv1phrasematchrule";
export declare enum GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnum {
    PhraseMatchRuleGroupTypeUnspecified = "PHRASE_MATCH_RULE_GROUP_TYPE_UNSPECIFIED",
    AllOf = "ALL_OF",
    AnyOf = "ANY_OF"
}
/**
 * A message representing a rule in the phrase matcher.
**/
export declare class GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup extends SpeakeasyBase {
    phraseMatchRules?: GoogleCloudContactcenterinsightsV1PhraseMatchRule[];
    type?: GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnum;
}
