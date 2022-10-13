package shared

type ListServiceConfigsResponse struct {
	NextPageToken  *string   `json:"nextPageToken"`
	ServiceConfigs []Service `json:"serviceConfigs"`
}
