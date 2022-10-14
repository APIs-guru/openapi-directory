package shared

type APIVersion struct {
	APIVersion     *string `json:"apiVersion,omitempty"`
	ServiceVersion *string `json:"serviceVersion,omitempty"`
}
