package shared

type Objects struct {
	Items         []Object `json:"items"`
	Kind          *string  `json:"kind"`
	NextPageToken *string  `json:"nextPageToken"`
	Prefixes      []string `json:"prefixes"`
}
