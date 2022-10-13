package shared

type Seriesmembership struct {
	Kind          *string  `json:"kind"`
	Member        []Volume `json:"member"`
	NextPageToken *string  `json:"nextPageToken"`
}
