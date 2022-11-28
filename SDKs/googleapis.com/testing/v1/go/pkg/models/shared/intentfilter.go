package shared

// IntentFilter
// The section of an tag. https://developer.android.com/guide/topics/manifest/intent-filter-element.html
type IntentFilter struct {
	ActionNames   []string `json:"actionNames,omitempty"`
	CategoryNames []string `json:"categoryNames,omitempty"`
	MimeType      *string  `json:"mimeType,omitempty"`
}
