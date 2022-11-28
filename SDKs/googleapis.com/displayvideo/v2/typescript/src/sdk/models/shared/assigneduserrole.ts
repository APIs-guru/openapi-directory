import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AssignedUserRoleUserRoleEnum {
    UserRoleUnspecified = "USER_ROLE_UNSPECIFIED",
    Admin = "ADMIN",
    AdminPartnerClient = "ADMIN_PARTNER_CLIENT",
    Standard = "STANDARD",
    StandardPlanner = "STANDARD_PLANNER",
    StandardPlannerLimited = "STANDARD_PLANNER_LIMITED",
    StandardPartnerClient = "STANDARD_PARTNER_CLIENT",
    ReadOnly = "READ_ONLY",
    ReportingOnly = "REPORTING_ONLY",
    LimitedReportingOnly = "LIMITED_REPORTING_ONLY",
    Creative = "CREATIVE",
    CreativeAdmin = "CREATIVE_ADMIN"
}


// AssignedUserRole
/** 
 * A single assigned user role, which defines a user's authorized interaction with a specified partner or advertiser.
**/
export class AssignedUserRole extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=assignedUserRoleId" })
  assignedUserRoleId?: string;

  @SpeakeasyMetadata({ data: "json, name=partnerId" })
  partnerId?: string;

  @SpeakeasyMetadata({ data: "json, name=userRole" })
  userRole?: AssignedUserRoleUserRoleEnum;
}


// AssignedUserRoleInput
/** 
 * A single assigned user role, which defines a user's authorized interaction with a specified partner or advertiser.
**/
export class AssignedUserRoleInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=partnerId" })
  partnerId?: string;

  @SpeakeasyMetadata({ data: "json, name=userRole" })
  userRole?: AssignedUserRoleUserRoleEnum;
}
