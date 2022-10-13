package shared

type User struct {
	DisplayName  *string `json:"displayName"`
	EmailAddress *string `json:"emailAddress"`
	Kind         *string `json:"kind"`
	Me           *bool   `json:"me"`
	PermissionID *string `json:"permissionId"`
	PhotoLink    *string `json:"photoLink"`
}
