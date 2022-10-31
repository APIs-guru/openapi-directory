package shared

type OptionalColor struct {
	OpaqueColor *OpaqueColor `json:"opaqueColor,omitempty"`
}
