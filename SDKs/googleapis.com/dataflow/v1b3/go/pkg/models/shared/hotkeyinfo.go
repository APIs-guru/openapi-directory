package shared

type HotKeyInfo struct {
	HotKeyAge    *string `json:"hotKeyAge"`
	Key          *string `json:"key"`
	KeyTruncated *bool   `json:"keyTruncated"`
}
