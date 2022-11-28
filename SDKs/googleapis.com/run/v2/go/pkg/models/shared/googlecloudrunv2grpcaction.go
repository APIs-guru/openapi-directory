package shared

// GoogleCloudRunV2GrpcAction
// GRPCAction describes an action involving a GRPC port.
type GoogleCloudRunV2GrpcAction struct {
	Port    *int32  `json:"port,omitempty"`
	Service *string `json:"service,omitempty"`
}
