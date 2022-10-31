package shared

type ConfigSettings struct {
	Channel            *string      `json:"channel,omitempty"`
	EmulatedFormFactor *string      `json:"emulatedFormFactor,omitempty"`
	FormFactor         *string      `json:"formFactor,omitempty"`
	Locale             *string      `json:"locale,omitempty"`
	OnlyCategories     *interface{} `json:"onlyCategories,omitempty"`
}
