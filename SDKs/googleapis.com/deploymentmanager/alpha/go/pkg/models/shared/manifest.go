package shared

type Manifest struct {
	Config                 *ConfigFile  `json:"config,omitempty"`
	ExpandedConfig         *string      `json:"expandedConfig,omitempty"`
	ID                     *string      `json:"id,omitempty"`
	Imports                []ImportFile `json:"imports,omitempty"`
	InsertTime             *string      `json:"insertTime,omitempty"`
	Layout                 *string      `json:"layout,omitempty"`
	ManifestSizeBytes      *string      `json:"manifestSizeBytes,omitempty"`
	ManifestSizeLimitBytes *string      `json:"manifestSizeLimitBytes,omitempty"`
	Name                   *string      `json:"name,omitempty"`
	SelfLink               *string      `json:"selfLink,omitempty"`
}
