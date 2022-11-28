import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup } from "./googlecloudcontactcenterinsightsv1phrasematchrulegroup";
export declare enum GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED",
    HumanAgent = "HUMAN_AGENT",
    AutomatedAgent = "AUTOMATED_AGENT",
    EndUser = "END_USER",
    AnyAgent = "ANY_AGENT"
}
export declare enum GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum {
    PhraseMatcherTypeUnspecified = "PHRASE_MATCHER_TYPE_UNSPECIFIED",
    AllOf = "ALL_OF",
    AnyOf = "ANY_OF"
}
/**
 * The phrase matcher resource.
**/
export declare class GoogleCloudContactcenterinsightsV1PhraseMatcherInput extends SpeakeasyBase {
    active?: boolean;
    displayName?: string;
    name?: string;
    phraseMatchRuleGroups?: GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup[];
    roleMatch?: GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum;
    type?: GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum;
    versionTag?: string;
}
/**
 * The phrase matcher resource.
**/
export declare class GoogleCloudContactcenterinsightsV1PhraseMatcher extends SpeakeasyBase {
    activationUpdateTime?: string;
    active?: boolean;
    displayName?: string;
    name?: string;
    phraseMatchRuleGroups?: GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup[];
    revisionCreateTime?: string;
    revisionId?: string;
    roleMatch?: GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum;
    type?: GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum;
    updateTime?: string;
    versionTag?: string;
}
