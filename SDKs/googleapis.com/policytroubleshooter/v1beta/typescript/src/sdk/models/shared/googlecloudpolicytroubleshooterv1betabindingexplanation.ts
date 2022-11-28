import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeExpr } from "./googletypeexpr";
import { GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership } from "./googlecloudpolicytroubleshooterv1betabindingexplanationannotatedmembership";


export enum GoogleCloudPolicytroubleshooterV1betaBindingExplanationAccessEnum {
    AccessStateUnspecified = "ACCESS_STATE_UNSPECIFIED",
    Granted = "GRANTED",
    NotGranted = "NOT_GRANTED",
    UnknownConditional = "UNKNOWN_CONDITIONAL",
    UnknownInfoDenied = "UNKNOWN_INFO_DENIED"
}

export enum GoogleCloudPolicytroubleshooterV1betaBindingExplanationRelevanceEnum {
    HeuristicRelevanceUnspecified = "HEURISTIC_RELEVANCE_UNSPECIFIED",
    Normal = "NORMAL",
    High = "HIGH"
}

export enum GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionEnum {
    RolePermissionUnspecified = "ROLE_PERMISSION_UNSPECIFIED",
    RolePermissionIncluded = "ROLE_PERMISSION_INCLUDED",
    RolePermissionNotIncluded = "ROLE_PERMISSION_NOT_INCLUDED",
    RolePermissionUnknownInfoDenied = "ROLE_PERMISSION_UNKNOWN_INFO_DENIED"
}

export enum GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionRelevanceEnum {
    HeuristicRelevanceUnspecified = "HEURISTIC_RELEVANCE_UNSPECIFIED",
    Normal = "NORMAL",
    High = "HIGH"
}


// GoogleCloudPolicytroubleshooterV1betaBindingExplanation
/** 
 * Details about how a binding in a policy affects a member's ability to use a permission.
**/
export class GoogleCloudPolicytroubleshooterV1betaBindingExplanation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access?: GoogleCloudPolicytroubleshooterV1betaBindingExplanationAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: GoogleTypeExpr;

  @SpeakeasyMetadata({ data: "json, name=memberships", elemType: GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership })
  memberships?: Map<string, GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership>;

  @SpeakeasyMetadata({ data: "json, name=relevance" })
  relevance?: GoogleCloudPolicytroubleshooterV1betaBindingExplanationRelevanceEnum;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;

  @SpeakeasyMetadata({ data: "json, name=rolePermission" })
  rolePermission?: GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionEnum;

  @SpeakeasyMetadata({ data: "json, name=rolePermissionRelevance" })
  rolePermissionRelevance?: GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionRelevanceEnum;
}
