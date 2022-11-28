package shared

// AccountUserProfilesListResponse
// Account User Profile List Response
type AccountUserProfilesListResponse struct {
	AccountUserProfiles []AccountUserProfile `json:"accountUserProfiles,omitempty"`
	Kind                *string              `json:"kind,omitempty"`
	NextPageToken       *string              `json:"nextPageToken,omitempty"`
}
