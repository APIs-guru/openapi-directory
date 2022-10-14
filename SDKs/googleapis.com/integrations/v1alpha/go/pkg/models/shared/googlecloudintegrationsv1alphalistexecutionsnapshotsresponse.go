package shared

type GoogleCloudIntegrationsV1alphaListExecutionSnapshotsResponse struct {
	ExecutionSnapshots []EnterpriseCrmEventbusProtoEventExecutionSnapshot `json:"executionSnapshots,omitempty"`
	NextPageToken      *string                                            `json:"nextPageToken,omitempty"`
}
