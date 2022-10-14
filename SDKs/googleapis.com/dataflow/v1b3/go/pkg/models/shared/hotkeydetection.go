package shared

type HotKeyDetection struct {
	HotKeyAge    *string `json:"hotKeyAge,omitempty"`
	SystemName   *string `json:"systemName,omitempty"`
	UserStepName *string `json:"userStepName,omitempty"`
}
