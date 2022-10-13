package shared

type AccountUserProfilesListResponse struct {
	AccountUserProfiles []AccountUserProfile `json:"accountUserProfiles"`
	Kind                *string              `json:"kind"`
	NextPageToken       *string              `json:"nextPageToken"`
}
