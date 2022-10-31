package shared




type UserListStatusEnum string

const (
    UserListStatusEnumStatusUnspecified UserListStatusEnum = "STATUS_UNSPECIFIED"
UserListStatusEnumOpen UserListStatusEnum = "OPEN"
UserListStatusEnumClosed UserListStatusEnum = "CLOSED"
)


type UserList struct {
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    MembershipDurationDays *string `json:"membershipDurationDays,omitempty"`
    Name *string `json:"name,omitempty"`
    Status *UserListStatusEnum `json:"status,omitempty"`
    URLRestriction *URLRestriction `json:"urlRestriction,omitempty"`
    
}

