import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipMembershipEnum {
    MembershipUnspecified = "MEMBERSHIP_UNSPECIFIED",
    MembershipIncluded = "MEMBERSHIP_INCLUDED",
    MembershipNotIncluded = "MEMBERSHIP_NOT_INCLUDED",
    MembershipUnknownInfoDenied = "MEMBERSHIP_UNKNOWN_INFO_DENIED",
    MembershipUnknownUnsupported = "MEMBERSHIP_UNKNOWN_UNSUPPORTED"
}

export enum GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipRelevanceEnum {
    HeuristicRelevanceUnspecified = "HEURISTIC_RELEVANCE_UNSPECIFIED",
    Normal = "NORMAL",
    High = "HIGH"
}


// GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership
/** 
 * Details about whether the binding includes the member.
**/
export class GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=membership" })
  membership?: GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipMembershipEnum;

  @SpeakeasyMetadata({ data: "json, name=relevance" })
  relevance?: GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipRelevanceEnum;
}
