package shared

type Trace struct {
	EndpointInfo *EndpointInfo `json:"endpointInfo,omitempty"`
	Steps        []Step        `json:"steps,omitempty"`
}
