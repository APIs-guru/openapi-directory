package shared

// HotKeyInfo
// Information about a hot key.
type HotKeyInfo struct {
	HotKeyAge    *string `json:"hotKeyAge,omitempty"`
	Key          *string `json:"key,omitempty"`
	KeyTruncated *bool   `json:"keyTruncated,omitempty"`
}
