package shared

type ImageVersion struct {
	CreationDisabled        *bool    `json:"creationDisabled"`
	ImageVersionID          *string  `json:"imageVersionId"`
	IsDefault               *bool    `json:"isDefault"`
	ReleaseDate             *Date    `json:"releaseDate"`
	SupportedPythonVersions []string `json:"supportedPythonVersions"`
	UpgradeDisabled         *bool    `json:"upgradeDisabled"`
}
