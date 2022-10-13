package shared

type Precondition struct {
	Exists     *bool   `json:"exists"`
	UpdateTime *string `json:"updateTime"`
}
