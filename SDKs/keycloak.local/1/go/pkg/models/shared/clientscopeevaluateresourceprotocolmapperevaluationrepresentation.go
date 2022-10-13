package shared

type ClientScopeEvaluateResourceProtocolMapperEvaluationRepresentation struct {
	ContainerID    *string `json:"containerId"`
	ContainerName  *string `json:"containerName"`
	ContainerType  *string `json:"containerType"`
	MapperID       *string `json:"mapperId"`
	MapperName     *string `json:"mapperName"`
	ProtocolMapper *string `json:"protocolMapper"`
}
