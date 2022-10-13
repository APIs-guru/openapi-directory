package shared

type ResolveServiceRequest struct {
	EndpointFilter *string `json:"endpointFilter"`
	MaxEndpoints   *int32  `json:"maxEndpoints"`
}
