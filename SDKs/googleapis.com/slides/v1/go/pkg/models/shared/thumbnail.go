package shared

type Thumbnail struct {
	ContentURL *string `json:"contentUrl"`
	Height     *int32  `json:"height"`
	Width      *int32  `json:"width"`
}
