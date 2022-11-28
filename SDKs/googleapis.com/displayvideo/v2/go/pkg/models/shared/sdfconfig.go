package shared

type SdfConfigVersionEnum string

const (
	SdfConfigVersionEnumSdfVersionUnspecified SdfConfigVersionEnum = "SDF_VERSION_UNSPECIFIED"
	SdfConfigVersionEnumSdfVersion31          SdfConfigVersionEnum = "SDF_VERSION_3_1"
	SdfConfigVersionEnumSdfVersion4           SdfConfigVersionEnum = "SDF_VERSION_4"
	SdfConfigVersionEnumSdfVersion41          SdfConfigVersionEnum = "SDF_VERSION_4_1"
	SdfConfigVersionEnumSdfVersion42          SdfConfigVersionEnum = "SDF_VERSION_4_2"
	SdfConfigVersionEnumSdfVersion5           SdfConfigVersionEnum = "SDF_VERSION_5"
	SdfConfigVersionEnumSdfVersion51          SdfConfigVersionEnum = "SDF_VERSION_5_1"
	SdfConfigVersionEnumSdfVersion52          SdfConfigVersionEnum = "SDF_VERSION_5_2"
	SdfConfigVersionEnumSdfVersion53          SdfConfigVersionEnum = "SDF_VERSION_5_3"
	SdfConfigVersionEnumSdfVersion54          SdfConfigVersionEnum = "SDF_VERSION_5_4"
	SdfConfigVersionEnumSdfVersion55          SdfConfigVersionEnum = "SDF_VERSION_5_5"
)

// SdfConfig
// Structured Data File (SDF) related settings.
type SdfConfig struct {
	AdminEmail *string               `json:"adminEmail,omitempty"`
	Version    *SdfConfigVersionEnum `json:"version,omitempty"`
}
