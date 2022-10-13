package shared

type LabelList struct {
	Kind          *string `json:"kind"`
	Labels        []Label `json:"labels"`
	NextPageToken *string `json:"nextPageToken"`
}
