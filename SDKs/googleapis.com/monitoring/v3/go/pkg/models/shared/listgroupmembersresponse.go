package shared

type ListGroupMembersResponse struct {
	Members       []MonitoredResource `json:"members"`
	NextPageToken *string             `json:"nextPageToken"`
	TotalSize     *int32              `json:"totalSize"`
}
