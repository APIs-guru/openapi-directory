package shared

type GrpcAction struct {
	Port    *int32  `json:"port"`
	Service *string `json:"service"`
}
