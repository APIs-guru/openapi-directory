package shared

type ImageProperties struct {
	Angle          *float32        `json:"angle"`
	Brightness     *float32        `json:"brightness"`
	ContentURI     *string         `json:"contentUri"`
	Contrast       *float32        `json:"contrast"`
	CropProperties *CropProperties `json:"cropProperties"`
	SourceURI      *string         `json:"sourceUri"`
	Transparency   *float32        `json:"transparency"`
}
