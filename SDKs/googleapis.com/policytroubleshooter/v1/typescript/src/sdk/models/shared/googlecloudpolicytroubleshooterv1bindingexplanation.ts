import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleTypeExpr } from "./googletypeexpr";
import { GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership } from "./googlecloudpolicytroubleshooterv1bindingexplanationannotatedmembership";

export enum GoogleCloudPolicytroubleshooterV1BindingExplanationAccessEnum {
    AccessStateUnspecified = "ACCESS_STATE_UNSPECIFIED"
,    Granted = "GRANTED"
,    NotGranted = "NOT_GRANTED"
,    UnknownConditional = "UNKNOWN_CONDITIONAL"
,    UnknownInfoDenied = "UNKNOWN_INFO_DENIED"
}

export enum GoogleCloudPolicytroubleshooterV1BindingExplanationRelevanceEnum {
    HeuristicRelevanceUnspecified = "HEURISTIC_RELEVANCE_UNSPECIFIED"
,    Normal = "NORMAL"
,    High = "HIGH"
}

export enum GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionEnum {
    RolePermissionUnspecified = "ROLE_PERMISSION_UNSPECIFIED"
,    RolePermissionIncluded = "ROLE_PERMISSION_INCLUDED"
,    RolePermissionNotIncluded = "ROLE_PERMISSION_NOT_INCLUDED"
,    RolePermissionUnknownInfoDenied = "ROLE_PERMISSION_UNKNOWN_INFO_DENIED"
}

export enum GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionRelevanceEnum {
    HeuristicRelevanceUnspecified = "HEURISTIC_RELEVANCE_UNSPECIFIED"
,    Normal = "NORMAL"
,    High = "HIGH"
}


// GoogleCloudPolicytroubleshooterV1BindingExplanation
/** 
 * Details about how a binding in a policy affects a principal's ability to use a permission.
**/
export class GoogleCloudPolicytroubleshooterV1BindingExplanation extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access?: GoogleCloudPolicytroubleshooterV1BindingExplanationAccessEnum;

  @Metadata({ data: "json, name=condition" })
  condition?: GoogleTypeExpr;

  @Metadata({ data: "json, name=memberships", elemType: shared.GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership })
  memberships?: Map<string, GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership>;

  @Metadata({ data: "json, name=relevance" })
  relevance?: GoogleCloudPolicytroubleshooterV1BindingExplanationRelevanceEnum;

  @Metadata({ data: "json, name=role" })
  role?: string;

  @Metadata({ data: "json, name=rolePermission" })
  rolePermission?: GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionEnum;

  @Metadata({ data: "json, name=rolePermissionRelevance" })
  rolePermissionRelevance?: GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionRelevanceEnum;
}
