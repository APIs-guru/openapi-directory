package shared

// UserRole
// Contains properties of auser role, which is used to manage user access.
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
