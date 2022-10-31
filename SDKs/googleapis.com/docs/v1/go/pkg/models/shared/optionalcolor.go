package shared

type OptionalColor struct {
	Color *Color `json:"color,omitempty"`
}
