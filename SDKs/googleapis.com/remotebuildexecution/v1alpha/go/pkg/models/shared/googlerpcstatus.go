package shared

type GoogleRPCStatus struct {
	Code    *int32                   `json:"code"`
	Details []map[string]interface{} `json:"details"`
	Message *string                  `json:"message"`
}
