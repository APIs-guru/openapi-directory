package shared

type AssignedUserRoleUserRoleEnum string

const (
	AssignedUserRoleUserRoleEnumUserRoleUnspecified    AssignedUserRoleUserRoleEnum = "USER_ROLE_UNSPECIFIED"
	AssignedUserRoleUserRoleEnumAdmin                  AssignedUserRoleUserRoleEnum = "ADMIN"
	AssignedUserRoleUserRoleEnumAdminPartnerClient     AssignedUserRoleUserRoleEnum = "ADMIN_PARTNER_CLIENT"
	AssignedUserRoleUserRoleEnumStandard               AssignedUserRoleUserRoleEnum = "STANDARD"
	AssignedUserRoleUserRoleEnumStandardPlanner        AssignedUserRoleUserRoleEnum = "STANDARD_PLANNER"
	AssignedUserRoleUserRoleEnumStandardPlannerLimited AssignedUserRoleUserRoleEnum = "STANDARD_PLANNER_LIMITED"
	AssignedUserRoleUserRoleEnumStandardPartnerClient  AssignedUserRoleUserRoleEnum = "STANDARD_PARTNER_CLIENT"
	AssignedUserRoleUserRoleEnumReadOnly               AssignedUserRoleUserRoleEnum = "READ_ONLY"
	AssignedUserRoleUserRoleEnumReportingOnly          AssignedUserRoleUserRoleEnum = "REPORTING_ONLY"
	AssignedUserRoleUserRoleEnumLimitedReportingOnly   AssignedUserRoleUserRoleEnum = "LIMITED_REPORTING_ONLY"
	AssignedUserRoleUserRoleEnumCreative               AssignedUserRoleUserRoleEnum = "CREATIVE"
	AssignedUserRoleUserRoleEnumCreativeAdmin          AssignedUserRoleUserRoleEnum = "CREATIVE_ADMIN"
)

type AssignedUserRole struct {
	AdvertiserID       *string                       `json:"advertiserId"`
	AssignedUserRoleID *string                       `json:"assignedUserRoleId"`
	PartnerID          *string                       `json:"partnerId"`
	UserRole           *AssignedUserRoleUserRoleEnum `json:"userRole"`
}
