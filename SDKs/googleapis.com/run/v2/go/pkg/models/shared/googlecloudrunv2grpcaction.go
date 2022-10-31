package shared

type GoogleCloudRunV2GrpcAction struct {
	Port    *int32  `json:"port,omitempty"`
	Service *string `json:"service,omitempty"`
}
