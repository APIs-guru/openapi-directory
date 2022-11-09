import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipMembershipEnum {
    MembershipUnspecified = "MEMBERSHIP_UNSPECIFIED"
,    MembershipIncluded = "MEMBERSHIP_INCLUDED"
,    MembershipNotIncluded = "MEMBERSHIP_NOT_INCLUDED"
,    MembershipUnknownInfoDenied = "MEMBERSHIP_UNKNOWN_INFO_DENIED"
,    MembershipUnknownUnsupported = "MEMBERSHIP_UNKNOWN_UNSUPPORTED"
}

export enum GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipRelevanceEnum {
    HeuristicRelevanceUnspecified = "HEURISTIC_RELEVANCE_UNSPECIFIED"
,    Normal = "NORMAL"
,    High = "HIGH"
}


// GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership
/** 
 * Details about whether the binding includes the principal.
**/
export class GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership extends SpeakeasyBase {
  @Metadata({ data: "json, name=membership" })
  membership?: GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipMembershipEnum;

  @Metadata({ data: "json, name=relevance" })
  relevance?: GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipRelevanceEnum;
}
