import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup } from "./googlecloudcontactcenterinsightsv1phrasematchrulegroup";


export enum GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED",
    HumanAgent = "HUMAN_AGENT",
    AutomatedAgent = "AUTOMATED_AGENT",
    EndUser = "END_USER",
    AnyAgent = "ANY_AGENT"
}

export enum GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum {
    PhraseMatcherTypeUnspecified = "PHRASE_MATCHER_TYPE_UNSPECIFIED",
    AllOf = "ALL_OF",
    AnyOf = "ANY_OF"
}


// GoogleCloudContactcenterinsightsV1PhraseMatcherInput
/** 
 * The phrase matcher resource.
**/
export class GoogleCloudContactcenterinsightsV1PhraseMatcherInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=phraseMatchRuleGroups", elemType: GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup })
  phraseMatchRuleGroups?: GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup[];

  @SpeakeasyMetadata({ data: "json, name=roleMatch" })
  roleMatch?: GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=versionTag" })
  versionTag?: string;
}


// GoogleCloudContactcenterinsightsV1PhraseMatcher
/** 
 * The phrase matcher resource.
**/
export class GoogleCloudContactcenterinsightsV1PhraseMatcher extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activationUpdateTime" })
  activationUpdateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=phraseMatchRuleGroups", elemType: GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup })
  phraseMatchRuleGroups?: GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup[];

  @SpeakeasyMetadata({ data: "json, name=revisionCreateTime" })
  revisionCreateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=roleMatch" })
  roleMatch?: GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=versionTag" })
  versionTag?: string;
}
