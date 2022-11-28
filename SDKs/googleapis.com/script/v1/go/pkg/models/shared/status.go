package shared

// Status
// If a `run` call succeeds but the script function (or Apps Script itself) throws an exception, the response body's error field contains this `Status` object.
type Status struct {
	Code    *int32                   `json:"code,omitempty"`
	Details []map[string]interface{} `json:"details,omitempty"`
	Message *string                  `json:"message,omitempty"`
}
