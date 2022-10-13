package shared

type HTTPHeaderInfo struct {
	Match *HeaderMatchTypeEnum `json:"Match"`
	Name  *string              `json:"Name"`
	Value *string              `json:"Value"`
}
