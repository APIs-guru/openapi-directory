package shared

type EditGuaranteedOrderReadAccessorsResponse struct {
	ReadAccessInherited *bool    `json:"readAccessInherited"`
	ReadAdvertiserIds   []string `json:"readAdvertiserIds"`
}
