package shared

// HotKeyDetection
// Proto describing a hot key detected on a given WorkItem.
type HotKeyDetection struct {
	HotKeyAge    *string `json:"hotKeyAge,omitempty"`
	SystemName   *string `json:"systemName,omitempty"`
	UserStepName *string `json:"userStepName,omitempty"`
}
