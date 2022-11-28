import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AssignedUserRoleUserRoleEnum {
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
/**
 * A single assigned user role, which defines a user's authorized interaction with a specified partner or advertiser.
**/
export declare class AssignedUserRole extends SpeakeasyBase {
    advertiserId?: string;
    assignedUserRoleId?: string;
    partnerId?: string;
    userRole?: AssignedUserRoleUserRoleEnum;
}
/**
 * A single assigned user role, which defines a user's authorized interaction with a specified partner or advertiser.
**/
export declare class AssignedUserRoleInput extends SpeakeasyBase {
    advertiserId?: string;
    partnerId?: string;
    userRole?: AssignedUserRoleUserRoleEnum;
}
