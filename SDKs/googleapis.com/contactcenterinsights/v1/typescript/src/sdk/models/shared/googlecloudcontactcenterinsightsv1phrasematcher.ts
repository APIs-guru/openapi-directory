import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup } from "./googlecloudcontactcenterinsightsv1phrasematchrulegroup";

export enum GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED"
,    HumanAgent = "HUMAN_AGENT"
,    AutomatedAgent = "AUTOMATED_AGENT"
,    EndUser = "END_USER"
,    AnyAgent = "ANY_AGENT"
}

export enum GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum {
    PhraseMatcherTypeUnspecified = "PHRASE_MATCHER_TYPE_UNSPECIFIED"
,    AllOf = "ALL_OF"
,    AnyOf = "ANY_OF"
}


// GoogleCloudContactcenterinsightsV1PhraseMatcher
/** 
 * The phrase matcher resource.
**/
export class GoogleCloudContactcenterinsightsV1PhraseMatcher extends SpeakeasyBase {
  @Metadata({ data: "json, name=activationUpdateTime" })
  activationUpdateTime?: string;

  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=phraseMatchRuleGroups", elemType: shared.GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup })
  phraseMatchRuleGroups?: GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup[];

  @Metadata({ data: "json, name=revisionCreateTime" })
  revisionCreateTime?: string;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @Metadata({ data: "json, name=roleMatch" })
  roleMatch?: GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=versionTag" })
  versionTag?: string;
}
