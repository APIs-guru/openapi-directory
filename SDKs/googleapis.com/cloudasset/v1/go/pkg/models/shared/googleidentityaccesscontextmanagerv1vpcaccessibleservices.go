package shared

type GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices struct {
	AllowedServices   []string `json:"allowedServices"`
	EnableRestriction *bool    `json:"enableRestriction"`
}
