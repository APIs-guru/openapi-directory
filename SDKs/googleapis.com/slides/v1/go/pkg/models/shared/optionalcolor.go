package shared

// OptionalColor
// A color that can either be fully opaque or fully transparent.
type OptionalColor struct {
	OpaqueColor *OpaqueColor `json:"opaqueColor,omitempty"`
}
