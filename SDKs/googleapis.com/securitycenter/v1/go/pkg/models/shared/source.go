package shared

type Source struct {
	CanonicalName *string `json:"canonicalName"`
	Description   *string `json:"description"`
	DisplayName   *string `json:"displayName"`
	Name          *string `json:"name"`
}
