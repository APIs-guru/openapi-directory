package shared

// ListEkmConnectionsResponse
// Response message for EkmService.ListEkmConnections.
type ListEkmConnectionsResponse struct {
	EkmConnections []EkmConnection `json:"ekmConnections,omitempty"`
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
	TotalSize      *int32          `json:"totalSize,omitempty"`
}
