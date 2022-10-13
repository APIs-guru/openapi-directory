package shared

type Thumbnail struct {
	ContentType *string `json:"contentType"`
	Data        *string `json:"data"`
	HeightPx    *int32  `json:"heightPx"`
	WidthPx     *int32  `json:"widthPx"`
}
