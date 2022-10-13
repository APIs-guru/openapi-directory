package shared

type DriveList struct {
	Items         []Drive `json:"items"`
	Kind          *string `json:"kind"`
	NextPageToken *string `json:"nextPageToken"`
}
