package shared

// GoogleRPCStatus
// The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors).
type GoogleRPCStatus struct {
	Code    *int32                   `json:"code,omitempty"`
	Details []map[string]interface{} `json:"details,omitempty"`
	Message *string                  `json:"message,omitempty"`
}
