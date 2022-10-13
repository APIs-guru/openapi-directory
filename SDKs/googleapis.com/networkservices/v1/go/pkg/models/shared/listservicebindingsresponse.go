package shared

type ListServiceBindingsResponse struct {
	NextPageToken   *string          `json:"nextPageToken"`
	ServiceBindings []ServiceBinding `json:"serviceBindings"`
}
