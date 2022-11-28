package shared

// Metadata
// A tag within a manifest. https://developer.android.com/guide/topics/manifest/meta-data-element.html
type Metadata struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}
