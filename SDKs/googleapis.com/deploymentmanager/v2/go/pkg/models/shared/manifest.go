package shared

type Manifest struct {
	Config                 *ConfigFile  `json:"config"`
	ExpandedConfig         *string      `json:"expandedConfig"`
	ID                     *string      `json:"id"`
	Imports                []ImportFile `json:"imports"`
	InsertTime             *string      `json:"insertTime"`
	Layout                 *string      `json:"layout"`
	ManifestSizeBytes      *string      `json:"manifestSizeBytes"`
	ManifestSizeLimitBytes *string      `json:"manifestSizeLimitBytes"`
	Name                   *string      `json:"name"`
	SelfLink               *string      `json:"selfLink"`
}
