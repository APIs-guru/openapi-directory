package shared

type ListEkmConnectionsResponse struct {
	EkmConnections []EkmConnection `json:"ekmConnections"`
	NextPageToken  *string         `json:"nextPageToken"`
	TotalSize      *int32          `json:"totalSize"`
}
