package shared

// ImageVersion
// ImageVersion information
type ImageVersion struct {
	CreationDisabled        *bool    `json:"creationDisabled,omitempty"`
	ImageVersionID          *string  `json:"imageVersionId,omitempty"`
	IsDefault               *bool    `json:"isDefault,omitempty"`
	ReleaseDate             *Date    `json:"releaseDate,omitempty"`
	SupportedPythonVersions []string `json:"supportedPythonVersions,omitempty"`
	UpgradeDisabled         *bool    `json:"upgradeDisabled,omitempty"`
}
