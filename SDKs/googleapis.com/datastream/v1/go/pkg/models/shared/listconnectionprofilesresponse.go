package shared

// ListConnectionProfilesResponse
// Response message for listing connection profiles.
type ListConnectionProfilesResponse struct {
	ConnectionProfiles []ConnectionProfile `json:"connectionProfiles,omitempty"`
	NextPageToken      *string             `json:"nextPageToken,omitempty"`
	Unreachable        []string            `json:"unreachable,omitempty"`
}
