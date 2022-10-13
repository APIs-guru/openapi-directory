package shared

type AdvertiserGroupsListResponse struct {
	AdvertiserGroups []AdvertiserGroup `json:"advertiserGroups"`
	Kind             *string           `json:"kind"`
	NextPageToken    *string           `json:"nextPageToken"`
}
