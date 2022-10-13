package shared

type UserListStatusEnum string

const (
	UserListStatusEnumStatusUnspecified UserListStatusEnum = "STATUS_UNSPECIFIED"
	UserListStatusEnumOpen              UserListStatusEnum = "OPEN"
	UserListStatusEnumClosed            UserListStatusEnum = "CLOSED"
)

type UserList struct {
	Description            *string             `json:"description"`
	DisplayName            *string             `json:"displayName"`
	MembershipDurationDays *string             `json:"membershipDurationDays"`
	Name                   *string             `json:"name"`
	Status                 *UserListStatusEnum `json:"status"`
	URLRestriction         *URLRestriction     `json:"urlRestriction"`
}
