package shared

type ReusableConfigWrapper struct {
	ReusableConfig       *string               `json:"reusableConfig"`
	ReusableConfigValues *ReusableConfigValues `json:"reusableConfigValues"`
}
