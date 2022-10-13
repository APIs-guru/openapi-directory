package shared

type ListPhotosResponse struct {
	NextPageToken *string `json:"nextPageToken"`
	Photos        []Photo `json:"photos"`
}
