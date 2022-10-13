package shared

type Endpoint struct {
	Address    *string           `json:"address"`
	CreateTime *string           `json:"createTime"`
	Metadata   map[string]string `json:"metadata"`
	Name       *string           `json:"name"`
	Network    *string           `json:"network"`
	Port       *int32            `json:"port"`
	UpdateTime *string           `json:"updateTime"`
}
