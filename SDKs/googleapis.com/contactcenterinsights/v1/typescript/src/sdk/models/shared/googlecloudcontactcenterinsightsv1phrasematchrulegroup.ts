import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudContactcenterinsightsV1PhraseMatchRule } from "./googlecloudcontactcenterinsightsv1phrasematchrule";

export enum GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnum {
    PhraseMatchRuleGroupTypeUnspecified = "PHRASE_MATCH_RULE_GROUP_TYPE_UNSPECIFIED"
,    AllOf = "ALL_OF"
,    AnyOf = "ANY_OF"
}


// GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup
/** 
 * A message representing a rule in the phrase matcher.
**/
export class GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=phraseMatchRules", elemType: shared.GoogleCloudContactcenterinsightsV1PhraseMatchRule })
  phraseMatchRules?: GoogleCloudContactcenterinsightsV1PhraseMatchRule[];

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnum;
}
