package shared

// Probe
// Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
type Probe struct {
	Exec                *ExecAction      `json:"exec,omitempty"`
	FailureThreshold    *int32           `json:"failureThreshold,omitempty"`
	Grpc                *GrpcAction      `json:"grpc,omitempty"`
	HTTPGet             *HTTPGetAction   `json:"httpGet,omitempty"`
	InitialDelaySeconds *int32           `json:"initialDelaySeconds,omitempty"`
	PeriodSeconds       *int32           `json:"periodSeconds,omitempty"`
	SuccessThreshold    *int32           `json:"successThreshold,omitempty"`
	TCPSocket           *TCPSocketAction `json:"tcpSocket,omitempty"`
	TimeoutSeconds      *int32           `json:"timeoutSeconds,omitempty"`
}
