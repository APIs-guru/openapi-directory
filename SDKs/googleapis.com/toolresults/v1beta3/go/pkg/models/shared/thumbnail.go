package shared

type Thumbnail struct {
	ContentType *string `json:"contentType,omitempty"`
	Data        *string `json:"data,omitempty"`
	HeightPx    *int32  `json:"heightPx,omitempty"`
	WidthPx     *int32  `json:"widthPx,omitempty"`
}
