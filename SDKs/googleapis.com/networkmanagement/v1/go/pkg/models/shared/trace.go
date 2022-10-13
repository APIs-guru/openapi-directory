package shared

type Trace struct {
	EndpointInfo *EndpointInfo `json:"endpointInfo"`
	Steps        []Step        `json:"steps"`
}
