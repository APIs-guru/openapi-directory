import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudPolicysimulatorV1BindingExplanationAnnotatedMembershipMembershipEnum {
    MembershipUnspecified = "MEMBERSHIP_UNSPECIFIED",
    MembershipIncluded = "MEMBERSHIP_INCLUDED",
    MembershipNotIncluded = "MEMBERSHIP_NOT_INCLUDED",
    MembershipUnknownInfoDenied = "MEMBERSHIP_UNKNOWN_INFO_DENIED",
    MembershipUnknownUnsupported = "MEMBERSHIP_UNKNOWN_UNSUPPORTED"
}

export enum GoogleCloudPolicysimulatorV1BindingExplanationAnnotatedMembershipRelevanceEnum {
    HeuristicRelevanceUnspecified = "HEURISTIC_RELEVANCE_UNSPECIFIED",
    Normal = "NORMAL",
    High = "HIGH"
}


// GoogleCloudPolicysimulatorV1BindingExplanationAnnotatedMembership
/** 
 * Details about whether the binding includes the principal.
**/
export class GoogleCloudPolicysimulatorV1BindingExplanationAnnotatedMembership extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=membership" })
  membership?: GoogleCloudPolicysimulatorV1BindingExplanationAnnotatedMembershipMembershipEnum;

  @SpeakeasyMetadata({ data: "json, name=relevance" })
  relevance?: GoogleCloudPolicysimulatorV1BindingExplanationAnnotatedMembershipRelevanceEnum;
}
