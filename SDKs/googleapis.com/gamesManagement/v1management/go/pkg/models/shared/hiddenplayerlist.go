package shared

type HiddenPlayerList struct {
	Items         []HiddenPlayer `json:"items"`
	Kind          *string        `json:"kind"`
	NextPageToken *string        `json:"nextPageToken"`
}
