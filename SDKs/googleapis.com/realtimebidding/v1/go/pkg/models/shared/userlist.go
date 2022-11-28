package shared

type UserListStatusEnum string

const (
	UserListStatusEnumStatusUnspecified UserListStatusEnum = "STATUS_UNSPECIFIED"
	UserListStatusEnumOpen              UserListStatusEnum = "OPEN"
	UserListStatusEnumClosed            UserListStatusEnum = "CLOSED"
)

// UserListInput
// Represents an Authorized Buyers user list. Authorized Buyers can create/update/list user lists. Once a user list is created in the system, Authorized Buyers can add users to the user list using the bulk uploader API. Alternatively, users can be added by hosting a tag on the advertiser's page.
type UserListInput struct {
	Description            *string         `json:"description,omitempty"`
	DisplayName            *string         `json:"displayName,omitempty"`
	MembershipDurationDays *string         `json:"membershipDurationDays,omitempty"`
	URLRestriction         *URLRestriction `json:"urlRestriction,omitempty"`
}

// UserList
// Represents an Authorized Buyers user list. Authorized Buyers can create/update/list user lists. Once a user list is created in the system, Authorized Buyers can add users to the user list using the bulk uploader API. Alternatively, users can be added by hosting a tag on the advertiser's page.
type UserList struct {
	Description            *string             `json:"description,omitempty"`
	DisplayName            *string             `json:"displayName,omitempty"`
	MembershipDurationDays *string             `json:"membershipDurationDays,omitempty"`
	Name                   *string             `json:"name,omitempty"`
	Status                 *UserListStatusEnum `json:"status,omitempty"`
	URLRestriction         *URLRestriction     `json:"urlRestriction,omitempty"`
}
