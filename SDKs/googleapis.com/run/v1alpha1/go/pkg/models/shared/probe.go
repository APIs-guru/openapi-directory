package shared

type Probe struct {
	Exec                *ExecAction      `json:"exec"`
	FailureThreshold    *int32           `json:"failureThreshold"`
	Grpc                *GrpcAction      `json:"grpc"`
	HTTPGet             *HTTPGetAction   `json:"httpGet"`
	InitialDelaySeconds *int32           `json:"initialDelaySeconds"`
	PeriodSeconds       *int32           `json:"periodSeconds"`
	SuccessThreshold    *int32           `json:"successThreshold"`
	TCPSocket           *TCPSocketAction `json:"tcpSocket"`
	TimeoutSeconds      *int32           `json:"timeoutSeconds"`
}
