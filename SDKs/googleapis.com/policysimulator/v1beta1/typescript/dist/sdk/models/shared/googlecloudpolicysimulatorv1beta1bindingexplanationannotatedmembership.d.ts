import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembershipMembershipEnum {
    MembershipUnspecified = "MEMBERSHIP_UNSPECIFIED",
    MembershipIncluded = "MEMBERSHIP_INCLUDED",
    MembershipNotIncluded = "MEMBERSHIP_NOT_INCLUDED",
    MembershipUnknownInfoDenied = "MEMBERSHIP_UNKNOWN_INFO_DENIED",
    MembershipUnknownUnsupported = "MEMBERSHIP_UNKNOWN_UNSUPPORTED"
}
export declare enum GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembershipRelevanceEnum {
    HeuristicRelevanceUnspecified = "HEURISTIC_RELEVANCE_UNSPECIFIED",
    Normal = "NORMAL",
    High = "HIGH"
}
/**
 * Details about whether the binding includes the principal.
**/
export declare class GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembership extends SpeakeasyBase {
    membership?: GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembershipMembershipEnum;
    relevance?: GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembershipRelevanceEnum;
}
