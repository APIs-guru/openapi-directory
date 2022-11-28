package shared

// SupportedRuntimeFeatures
// Supported runtime features of a connector version. This is passed to the management layer to add a new connector version by the connector developer. Details about how this proto is passed to the management layer is covered in this doc - go/runtime-manifest.
type SupportedRuntimeFeatures struct {
	ActionApis *bool `json:"actionApis,omitempty"`
	EntityApis *bool `json:"entityApis,omitempty"`
	SQLQuery   *bool `json:"sqlQuery,omitempty"`
}
