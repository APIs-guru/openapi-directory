package shared

type LabelList struct {
	Items         []Label `json:"items"`
	Kind          *string `json:"kind"`
	NextPageToken *string `json:"nextPageToken"`
}
