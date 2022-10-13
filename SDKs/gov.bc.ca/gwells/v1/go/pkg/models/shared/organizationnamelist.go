package shared

type OrganizationNameList struct {
	Name           string  `json:"name"`
	OrgGUID        *string `json:"org_guid"`
	OrgVerboseName *string `json:"org_verbose_name"`
}
