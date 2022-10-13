package shared

type ConfigSettings struct {
	Channel            *string      `json:"channel"`
	EmulatedFormFactor *string      `json:"emulatedFormFactor"`
	FormFactor         *string      `json:"formFactor"`
	Locale             *string      `json:"locale"`
	OnlyCategories     *interface{} `json:"onlyCategories"`
}
