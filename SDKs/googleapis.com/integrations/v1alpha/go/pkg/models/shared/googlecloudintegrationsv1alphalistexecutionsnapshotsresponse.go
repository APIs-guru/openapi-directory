package shared

type GoogleCloudIntegrationsV1alphaListExecutionSnapshotsResponse struct {
	ExecutionSnapshots []EnterpriseCrmEventbusProtoEventExecutionSnapshot `json:"executionSnapshots"`
	NextPageToken      *string                                            `json:"nextPageToken"`
}
