import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipMembershipEnum {
    MembershipUnspecified = "MEMBERSHIP_UNSPECIFIED",
    MembershipIncluded = "MEMBERSHIP_INCLUDED",
    MembershipNotIncluded = "MEMBERSHIP_NOT_INCLUDED",
    MembershipUnknownInfoDenied = "MEMBERSHIP_UNKNOWN_INFO_DENIED",
    MembershipUnknownUnsupported = "MEMBERSHIP_UNKNOWN_UNSUPPORTED"
}
export declare enum GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipRelevanceEnum {
    HeuristicRelevanceUnspecified = "HEURISTIC_RELEVANCE_UNSPECIFIED",
    Normal = "NORMAL",
    High = "HIGH"
}
/**
 * Details about whether the binding includes the principal.
**/
export declare class GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership extends SpeakeasyBase {
    membership?: GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipMembershipEnum;
    relevance?: GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipRelevanceEnum;
}
