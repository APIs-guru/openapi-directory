package shared

type CompanionSetting struct {
	CompanionsDisabled *bool   `json:"companionsDisabled"`
	EnabledSizes       []Size  `json:"enabledSizes"`
	ImageOnly          *bool   `json:"imageOnly"`
	Kind               *string `json:"kind"`
}
