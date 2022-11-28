package shared

// UsesFeature
// A tag within a manifest. https://developer.android.com/guide/topics/manifest/uses-feature-element.html
type UsesFeature struct {
	IsRequired *bool   `json:"isRequired,omitempty"`
	Name       *string `json:"name,omitempty"`
}
