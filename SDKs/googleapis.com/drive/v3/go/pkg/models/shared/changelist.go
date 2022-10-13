package shared

type ChangeList struct {
	Changes           []Change `json:"changes"`
	Kind              *string  `json:"kind"`
	NewStartPageToken *string  `json:"newStartPageToken"`
	NextPageToken     *string  `json:"nextPageToken"`
}
