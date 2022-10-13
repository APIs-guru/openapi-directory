package shared

type Service struct {
	CreateTime *string           `json:"createTime"`
	Endpoints  []Endpoint        `json:"endpoints"`
	Metadata   map[string]string `json:"metadata"`
	Name       *string           `json:"name"`
	UpdateTime *string           `json:"updateTime"`
}
