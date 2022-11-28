import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeExpr } from "./googletypeexpr";
import { GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership } from "./googlecloudpolicytroubleshooterv1bindingexplanationannotatedmembership";
export declare enum GoogleCloudPolicytroubleshooterV1BindingExplanationAccessEnum {
    AccessStateUnspecified = "ACCESS_STATE_UNSPECIFIED",
    Granted = "GRANTED",
    NotGranted = "NOT_GRANTED",
    UnknownConditional = "UNKNOWN_CONDITIONAL",
    UnknownInfoDenied = "UNKNOWN_INFO_DENIED"
}
export declare enum GoogleCloudPolicytroubleshooterV1BindingExplanationRelevanceEnum {
    HeuristicRelevanceUnspecified = "HEURISTIC_RELEVANCE_UNSPECIFIED",
    Normal = "NORMAL",
    High = "HIGH"
}
export declare enum GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionEnum {
    RolePermissionUnspecified = "ROLE_PERMISSION_UNSPECIFIED",
    RolePermissionIncluded = "ROLE_PERMISSION_INCLUDED",
    RolePermissionNotIncluded = "ROLE_PERMISSION_NOT_INCLUDED",
    RolePermissionUnknownInfoDenied = "ROLE_PERMISSION_UNKNOWN_INFO_DENIED"
}
export declare enum GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionRelevanceEnum {
    HeuristicRelevanceUnspecified = "HEURISTIC_RELEVANCE_UNSPECIFIED",
    Normal = "NORMAL",
    High = "HIGH"
}
/**
 * Details about how a binding in a policy affects a principal's ability to use a permission.
**/
export declare class GoogleCloudPolicytroubleshooterV1BindingExplanation extends SpeakeasyBase {
    access?: GoogleCloudPolicytroubleshooterV1BindingExplanationAccessEnum;
    condition?: GoogleTypeExpr;
    memberships?: Map<string, GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership>;
    relevance?: GoogleCloudPolicytroubleshooterV1BindingExplanationRelevanceEnum;
    role?: string;
    rolePermission?: GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionEnum;
    rolePermissionRelevance?: GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionRelevanceEnum;
}
