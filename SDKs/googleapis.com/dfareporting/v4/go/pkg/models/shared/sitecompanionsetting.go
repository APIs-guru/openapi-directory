package shared

type SiteCompanionSetting struct {
	CompanionsDisabled *bool   `json:"companionsDisabled"`
	EnabledSizes       []Size  `json:"enabledSizes"`
	ImageOnly          *bool   `json:"imageOnly"`
	Kind               *string `json:"kind"`
}
