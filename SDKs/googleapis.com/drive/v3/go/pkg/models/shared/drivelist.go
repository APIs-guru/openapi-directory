package shared

type DriveList struct {
	Drives        []Drive `json:"drives"`
	Kind          *string `json:"kind"`
	NextPageToken *string `json:"nextPageToken"`
}
