package shared

type GooglePrivacyDlpV2DeidentifyTemplate struct {
	CreateTime       *string                             `json:"createTime,omitempty"`
	DeidentifyConfig *GooglePrivacyDlpV2DeidentifyConfig `json:"deidentifyConfig,omitempty"`
	Description      *string                             `json:"description,omitempty"`
	DisplayName      *string                             `json:"displayName,omitempty"`
	Name             *string                             `json:"name,omitempty"`
	UpdateTime       *string                             `json:"updateTime,omitempty"`
}
