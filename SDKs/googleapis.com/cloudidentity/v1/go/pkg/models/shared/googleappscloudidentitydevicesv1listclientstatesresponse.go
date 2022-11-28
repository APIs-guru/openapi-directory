package shared

// GoogleAppsCloudidentityDevicesV1ListClientStatesResponse
// Response message that is returned in ListClientStates.
type GoogleAppsCloudidentityDevicesV1ListClientStatesResponse struct {
	ClientStates  []GoogleAppsCloudidentityDevicesV1ClientState `json:"clientStates,omitempty"`
	NextPageToken *string                                       `json:"nextPageToken,omitempty"`
}
