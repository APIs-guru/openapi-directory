package shared

type ConfigManagementConfigSync struct {
	AllowVerticalScale *bool                      `json:"allowVerticalScale"`
	Enabled            *bool                      `json:"enabled"`
	Git                *ConfigManagementGitConfig `json:"git"`
	Oci                *ConfigManagementOciConfig `json:"oci"`
	PreventDrift       *bool                      `json:"preventDrift"`
	SourceFormat       *string                    `json:"sourceFormat"`
}
