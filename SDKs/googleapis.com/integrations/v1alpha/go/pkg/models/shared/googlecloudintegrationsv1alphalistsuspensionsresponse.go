package shared

type GoogleCloudIntegrationsV1alphaListSuspensionsResponse struct {
	NextPageToken *string                                    `json:"nextPageToken"`
	Suspensions   []GoogleCloudIntegrationsV1alphaSuspension `json:"suspensions"`
}
