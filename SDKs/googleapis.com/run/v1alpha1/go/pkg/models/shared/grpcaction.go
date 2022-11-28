package shared

// GrpcAction
// Not supported by Cloud Run GRPCAction describes an action involving a GRPC port.
type GrpcAction struct {
	Port    *int32  `json:"port,omitempty"`
	Service *string `json:"service,omitempty"`
}
