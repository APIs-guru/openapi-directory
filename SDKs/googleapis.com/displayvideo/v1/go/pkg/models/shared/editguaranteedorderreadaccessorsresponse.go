package shared

type EditGuaranteedOrderReadAccessorsResponse struct {
	ReadAccessInherited *bool    `json:"readAccessInherited,omitempty"`
	ReadAdvertiserIds   []string `json:"readAdvertiserIds,omitempty"`
}
