package shared

type QuotaLimit struct {
	DefaultLimit *string           `json:"defaultLimit"`
	Description  *string           `json:"description"`
	DisplayName  *string           `json:"displayName"`
	Duration     *string           `json:"duration"`
	FreeTier     *string           `json:"freeTier"`
	MaxLimit     *string           `json:"maxLimit"`
	Metric       *string           `json:"metric"`
	Name         *string           `json:"name"`
	Unit         *string           `json:"unit"`
	Values       map[string]string `json:"values"`
}
