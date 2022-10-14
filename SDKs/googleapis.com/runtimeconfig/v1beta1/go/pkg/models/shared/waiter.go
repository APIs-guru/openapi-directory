package shared

type Waiter struct {
	CreateTime *string       `json:"createTime,omitempty"`
	Done       *bool         `json:"done,omitempty"`
	Error      *Status       `json:"error,omitempty"`
	Failure    *EndCondition `json:"failure,omitempty"`
	Name       *string       `json:"name,omitempty"`
	Success    *EndCondition `json:"success,omitempty"`
	Timeout    *string       `json:"timeout,omitempty"`
}
