package shared

type GoogleCloudRunV2Probe struct {
	FailureThreshold    *int32                           `json:"failureThreshold"`
	Grpc                *GoogleCloudRunV2GrpcAction      `json:"grpc"`
	HTTPGet             *GoogleCloudRunV2HTTPGetAction   `json:"httpGet"`
	InitialDelaySeconds *int32                           `json:"initialDelaySeconds"`
	PeriodSeconds       *int32                           `json:"periodSeconds"`
	TCPSocket           *GoogleCloudRunV2TCPSocketAction `json:"tcpSocket"`
	TimeoutSeconds      *int32                           `json:"timeoutSeconds"`
}
