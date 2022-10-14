package shared

type AccountUserProfilesListResponse struct {
	AccountUserProfiles []AccountUserProfile `json:"accountUserProfiles,omitempty"`
	Kind                *string              `json:"kind,omitempty"`
	NextPageToken       *string              `json:"nextPageToken,omitempty"`
}
