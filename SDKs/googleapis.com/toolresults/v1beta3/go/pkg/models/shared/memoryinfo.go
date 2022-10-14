package shared

type MemoryInfo struct {
	MemoryCapInKibibyte   *string `json:"memoryCapInKibibyte,omitempty"`
	MemoryTotalInKibibyte *string `json:"memoryTotalInKibibyte,omitempty"`
}
