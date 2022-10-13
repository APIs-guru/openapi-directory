package shared

type QueryjobStats struct {
	Failed               *int32 `json:"failed"`
	Pending              *int32 `json:"pending"`
	SuccessWithResult    *int32 `json:"success-with-result"`
	SuccessWithoutResult *int32 `json:"success-without-result"`
	Successful           *int32 `json:"successful"`
}
