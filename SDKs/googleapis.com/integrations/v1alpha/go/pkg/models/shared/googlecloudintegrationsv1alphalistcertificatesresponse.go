package shared

type GoogleCloudIntegrationsV1alphaListCertificatesResponse struct {
	Certificates  []GoogleCloudIntegrationsV1alphaCertificate `json:"certificates,omitempty"`
	NextPageToken *string                                     `json:"nextPageToken,omitempty"`
}
