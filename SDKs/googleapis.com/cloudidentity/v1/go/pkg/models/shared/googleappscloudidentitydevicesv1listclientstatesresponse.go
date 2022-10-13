package shared

type GoogleAppsCloudidentityDevicesV1ListClientStatesResponse struct {
	ClientStates  []GoogleAppsCloudidentityDevicesV1ClientState `json:"clientStates"`
	NextPageToken *string                                       `json:"nextPageToken"`
}
