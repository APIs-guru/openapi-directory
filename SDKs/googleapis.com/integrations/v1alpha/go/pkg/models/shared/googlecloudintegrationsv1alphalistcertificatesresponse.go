package shared

type GoogleCloudIntegrationsV1alphaListCertificatesResponse struct {
	Certificates  []GoogleCloudIntegrationsV1alphaCertificate `json:"certificates"`
	NextPageToken *string                                     `json:"nextPageToken"`
}
