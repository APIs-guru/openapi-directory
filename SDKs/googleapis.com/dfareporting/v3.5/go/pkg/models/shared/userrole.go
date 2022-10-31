package shared

type UserRole struct {
	AccountID        *string              `json:"accountId,omitempty"`
	DefaultUserRole  *bool                `json:"defaultUserRole,omitempty"`
	ID               *string              `json:"id,omitempty"`
	Kind             *string              `json:"kind,omitempty"`
	Name             *string              `json:"name,omitempty"`
	ParentUserRoleID *string              `json:"parentUserRoleId,omitempty"`
	Permissions      []UserRolePermission `json:"permissions,omitempty"`
	SubaccountID     *string              `json:"subaccountId,omitempty"`
}
