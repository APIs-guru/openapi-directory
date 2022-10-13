package shared

type UserRole struct {
	AccountID        *string              `json:"accountId"`
	DefaultUserRole  *bool                `json:"defaultUserRole"`
	ID               *string              `json:"id"`
	Kind             *string              `json:"kind"`
	Name             *string              `json:"name"`
	ParentUserRoleID *string              `json:"parentUserRoleId"`
	Permissions      []UserRolePermission `json:"permissions"`
	SubaccountID     *string              `json:"subaccountId"`
}
