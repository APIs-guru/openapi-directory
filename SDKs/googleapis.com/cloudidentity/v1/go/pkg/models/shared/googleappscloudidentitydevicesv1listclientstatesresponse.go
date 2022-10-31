package shared

type GoogleAppsCloudidentityDevicesV1ListClientStatesResponse struct {
	ClientStates  []GoogleAppsCloudidentityDevicesV1ClientState `json:"clientStates,omitempty"`
	NextPageToken *string                                       `json:"nextPageToken,omitempty"`
}
