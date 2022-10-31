package shared

type AdvertiserGroupsListResponse struct {
	AdvertiserGroups []AdvertiserGroup `json:"advertiserGroups,omitempty"`
	Kind             *string           `json:"kind,omitempty"`
	NextPageToken    *string           `json:"nextPageToken,omitempty"`
}
