package shared

type CSS struct {
	CSSDomainID *string  `json:"cssDomainId,omitempty"`
	CSSGroupID  *string  `json:"cssGroupId,omitempty"`
	DisplayName *string  `json:"displayName,omitempty"`
	FullName    *string  `json:"fullName,omitempty"`
	HomepageURI *string  `json:"homepageUri,omitempty"`
	LabelIds    []string `json:"labelIds,omitempty"`
}
