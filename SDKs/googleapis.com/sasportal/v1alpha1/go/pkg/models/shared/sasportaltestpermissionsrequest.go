package shared

type SasPortalTestPermissionsRequest struct {
	Permissions []string `json:"permissions"`
	Resource    *string  `json:"resource"`
}
