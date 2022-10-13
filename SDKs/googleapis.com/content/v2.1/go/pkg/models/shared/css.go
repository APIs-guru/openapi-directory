package shared

type CSS struct {
	CSSDomainID *string  `json:"cssDomainId"`
	CSSGroupID  *string  `json:"cssGroupId"`
	DisplayName *string  `json:"displayName"`
	FullName    *string  `json:"fullName"`
	HomepageURI *string  `json:"homepageUri"`
	LabelIds    []string `json:"labelIds"`
}
