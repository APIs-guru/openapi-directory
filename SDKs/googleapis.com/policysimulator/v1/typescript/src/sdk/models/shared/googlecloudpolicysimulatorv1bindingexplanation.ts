import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeExpr } from "./googletypeexpr";
import { GoogleCloudPolicysimulatorV1BindingExplanationAnnotatedMembership } from "./googlecloudpolicysimulatorv1bindingexplanationannotatedmembership";


export enum GoogleCloudPolicysimulatorV1BindingExplanationAccessEnum {
    AccessStateUnspecified = "ACCESS_STATE_UNSPECIFIED",
    Granted = "GRANTED",
    NotGranted = "NOT_GRANTED",
    UnknownConditional = "UNKNOWN_CONDITIONAL",
    UnknownInfoDenied = "UNKNOWN_INFO_DENIED"
}

export enum GoogleCloudPolicysimulatorV1BindingExplanationRelevanceEnum {
    HeuristicRelevanceUnspecified = "HEURISTIC_RELEVANCE_UNSPECIFIED",
    Normal = "NORMAL",
    High = "HIGH"
}

export enum GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionEnum {
    RolePermissionUnspecified = "ROLE_PERMISSION_UNSPECIFIED",
    RolePermissionIncluded = "ROLE_PERMISSION_INCLUDED",
    RolePermissionNotIncluded = "ROLE_PERMISSION_NOT_INCLUDED",
    RolePermissionUnknownInfoDenied = "ROLE_PERMISSION_UNKNOWN_INFO_DENIED"
}

export enum GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionRelevanceEnum {
    HeuristicRelevanceUnspecified = "HEURISTIC_RELEVANCE_UNSPECIFIED",
    Normal = "NORMAL",
    High = "HIGH"
}


// GoogleCloudPolicysimulatorV1BindingExplanation
/** 
 * Details about how a binding in a policy affects a principal's ability to use a permission.
**/
export class GoogleCloudPolicysimulatorV1BindingExplanation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access?: GoogleCloudPolicysimulatorV1BindingExplanationAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: GoogleTypeExpr;

  @SpeakeasyMetadata({ data: "json, name=memberships", elemType: GoogleCloudPolicysimulatorV1BindingExplanationAnnotatedMembership })
  memberships?: Map<string, GoogleCloudPolicysimulatorV1BindingExplanationAnnotatedMembership>;

  @SpeakeasyMetadata({ data: "json, name=relevance" })
  relevance?: GoogleCloudPolicysimulatorV1BindingExplanationRelevanceEnum;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;

  @SpeakeasyMetadata({ data: "json, name=rolePermission" })
  rolePermission?: GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionEnum;

  @SpeakeasyMetadata({ data: "json, name=rolePermissionRelevance" })
  rolePermissionRelevance?: GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionRelevanceEnum;
}
