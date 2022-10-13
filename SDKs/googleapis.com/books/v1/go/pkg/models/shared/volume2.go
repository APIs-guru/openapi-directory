package shared

type Volume2 struct {
	Items         []Volume `json:"items"`
	Kind          *string  `json:"kind"`
	NextPageToken *string  `json:"nextPageToken"`
}
