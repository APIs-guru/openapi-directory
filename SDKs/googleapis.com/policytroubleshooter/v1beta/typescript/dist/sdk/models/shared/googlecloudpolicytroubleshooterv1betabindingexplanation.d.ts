import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeExpr } from "./googletypeexpr";
import { GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership } from "./googlecloudpolicytroubleshooterv1betabindingexplanationannotatedmembership";
export declare enum GoogleCloudPolicytroubleshooterV1betaBindingExplanationAccessEnum {
    AccessStateUnspecified = "ACCESS_STATE_UNSPECIFIED",
    Granted = "GRANTED",
    NotGranted = "NOT_GRANTED",
    UnknownConditional = "UNKNOWN_CONDITIONAL",
    UnknownInfoDenied = "UNKNOWN_INFO_DENIED"
}
export declare enum GoogleCloudPolicytroubleshooterV1betaBindingExplanationRelevanceEnum {
    HeuristicRelevanceUnspecified = "HEURISTIC_RELEVANCE_UNSPECIFIED",
    Normal = "NORMAL",
    High = "HIGH"
}
export declare enum GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionEnum {
    RolePermissionUnspecified = "ROLE_PERMISSION_UNSPECIFIED",
    RolePermissionIncluded = "ROLE_PERMISSION_INCLUDED",
    RolePermissionNotIncluded = "ROLE_PERMISSION_NOT_INCLUDED",
    RolePermissionUnknownInfoDenied = "ROLE_PERMISSION_UNKNOWN_INFO_DENIED"
}
export declare enum GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionRelevanceEnum {
    HeuristicRelevanceUnspecified = "HEURISTIC_RELEVANCE_UNSPECIFIED",
    Normal = "NORMAL",
    High = "HIGH"
}
/**
 * Details about how a binding in a policy affects a member's ability to use a permission.
**/
export declare class GoogleCloudPolicytroubleshooterV1betaBindingExplanation extends SpeakeasyBase {
    access?: GoogleCloudPolicytroubleshooterV1betaBindingExplanationAccessEnum;
    condition?: GoogleTypeExpr;
    memberships?: Map<string, GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership>;
    relevance?: GoogleCloudPolicytroubleshooterV1betaBindingExplanationRelevanceEnum;
    role?: string;
    rolePermission?: GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionEnum;
    rolePermissionRelevance?: GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionRelevanceEnum;
}
