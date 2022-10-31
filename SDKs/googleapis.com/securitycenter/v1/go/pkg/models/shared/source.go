package shared

type Source struct {
	CanonicalName *string `json:"canonicalName,omitempty"`
	Description   *string `json:"description,omitempty"`
	DisplayName   *string `json:"displayName,omitempty"`
	Name          *string `json:"name,omitempty"`
}
