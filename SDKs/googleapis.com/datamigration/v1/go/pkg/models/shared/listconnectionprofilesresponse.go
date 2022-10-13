package shared

type ListConnectionProfilesResponse struct {
	ConnectionProfiles []ConnectionProfile `json:"connectionProfiles"`
	NextPageToken      *string             `json:"nextPageToken"`
	Unreachable        []string            `json:"unreachable"`
}
