package shared

type Brand struct {
	ApplicationTitle *string `json:"applicationTitle"`
	Name             *string `json:"name"`
	OrgInternalOnly  *bool   `json:"orgInternalOnly"`
	SupportEmail     *string `json:"supportEmail"`
}
