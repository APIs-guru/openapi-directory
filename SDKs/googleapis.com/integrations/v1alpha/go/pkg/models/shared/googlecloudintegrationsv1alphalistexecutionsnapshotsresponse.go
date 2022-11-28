package shared

// GoogleCloudIntegrationsV1alphaListExecutionSnapshotsResponse
// Response for listing the integration execution snapshot.
type GoogleCloudIntegrationsV1alphaListExecutionSnapshotsResponse struct {
	ExecutionSnapshots []EnterpriseCrmEventbusProtoEventExecutionSnapshot `json:"executionSnapshots,omitempty"`
	NextPageToken      *string                                            `json:"nextPageToken,omitempty"`
}
