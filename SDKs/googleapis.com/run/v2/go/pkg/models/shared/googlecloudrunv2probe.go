package shared

// GoogleCloudRunV2Probe
// Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
type GoogleCloudRunV2Probe struct {
	FailureThreshold    *int32                           `json:"failureThreshold,omitempty"`
	Grpc                *GoogleCloudRunV2GrpcAction      `json:"grpc,omitempty"`
	HTTPGet             *GoogleCloudRunV2HTTPGetAction   `json:"httpGet,omitempty"`
	InitialDelaySeconds *int32                           `json:"initialDelaySeconds,omitempty"`
	PeriodSeconds       *int32                           `json:"periodSeconds,omitempty"`
	TCPSocket           *GoogleCloudRunV2TCPSocketAction `json:"tcpSocket,omitempty"`
	TimeoutSeconds      *int32                           `json:"timeoutSeconds,omitempty"`
}
