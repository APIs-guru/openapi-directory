package shared

type FloodlightActivityGroupsListResponse struct {
	FloodlightActivityGroups []FloodlightActivityGroup `json:"floodlightActivityGroups"`
	Kind                     *string                   `json:"kind"`
	NextPageToken            *string                   `json:"nextPageToken"`
}
