import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeExpr } from "./googletypeexpr";
import { GoogleCloudPolicysimulatorV1BindingExplanationAnnotatedMembership } from "./googlecloudpolicysimulatorv1bindingexplanationannotatedmembership";
export declare enum GoogleCloudPolicysimulatorV1BindingExplanationAccessEnum {
    AccessStateUnspecified = "ACCESS_STATE_UNSPECIFIED",
    Granted = "GRANTED",
    NotGranted = "NOT_GRANTED",
    UnknownConditional = "UNKNOWN_CONDITIONAL",
    UnknownInfoDenied = "UNKNOWN_INFO_DENIED"
}
export declare enum GoogleCloudPolicysimulatorV1BindingExplanationRelevanceEnum {
    HeuristicRelevanceUnspecified = "HEURISTIC_RELEVANCE_UNSPECIFIED",
    Normal = "NORMAL",
    High = "HIGH"
}
export declare enum GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionEnum {
    RolePermissionUnspecified = "ROLE_PERMISSION_UNSPECIFIED",
    RolePermissionIncluded = "ROLE_PERMISSION_INCLUDED",
    RolePermissionNotIncluded = "ROLE_PERMISSION_NOT_INCLUDED",
    RolePermissionUnknownInfoDenied = "ROLE_PERMISSION_UNKNOWN_INFO_DENIED"
}
export declare enum GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionRelevanceEnum {
    HeuristicRelevanceUnspecified = "HEURISTIC_RELEVANCE_UNSPECIFIED",
    Normal = "NORMAL",
    High = "HIGH"
}
/**
 * Details about how a binding in a policy affects a principal's ability to use a permission.
**/
export declare class GoogleCloudPolicysimulatorV1BindingExplanation extends SpeakeasyBase {
    access?: GoogleCloudPolicysimulatorV1BindingExplanationAccessEnum;
    condition?: GoogleTypeExpr;
    memberships?: Map<string, GoogleCloudPolicysimulatorV1BindingExplanationAnnotatedMembership>;
    relevance?: GoogleCloudPolicysimulatorV1BindingExplanationRelevanceEnum;
    role?: string;
    rolePermission?: GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionEnum;
    rolePermissionRelevance?: GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionRelevanceEnum;
}
