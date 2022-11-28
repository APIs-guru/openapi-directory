package shared

// GoogleCloudIntegrationsV1alphaListSuspensionsResponse
// Response for Suspensions.ListSuspensions.
type GoogleCloudIntegrationsV1alphaListSuspensionsResponse struct {
	NextPageToken *string                                    `json:"nextPageToken,omitempty"`
	Suspensions   []GoogleCloudIntegrationsV1alphaSuspension `json:"suspensions,omitempty"`
}
