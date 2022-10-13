package shared

type Waiter struct {
	CreateTime *string       `json:"createTime"`
	Done       *bool         `json:"done"`
	Error      *Status       `json:"error"`
	Failure    *EndCondition `json:"failure"`
	Name       *string       `json:"name"`
	Success    *EndCondition `json:"success"`
	Timeout    *string       `json:"timeout"`
}
