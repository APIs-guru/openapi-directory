package shared

type CustomErrorRule struct {
	IsErrorType *bool   `json:"isErrorType"`
	Selector    *string `json:"selector"`
}
