package shared

type GoogleCloudRunV2GrpcAction struct {
	Port    *int32  `json:"port"`
	Service *string `json:"service"`
}
