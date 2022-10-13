package shared

type ImageProperties struct {
	Brightness     *float32        `json:"brightness"`
	Contrast       *float32        `json:"contrast"`
	CropProperties *CropProperties `json:"cropProperties"`
	Link           *Link           `json:"link"`
	Outline        *Outline        `json:"outline"`
	Recolor        *Recolor        `json:"recolor"`
	Shadow         *Shadow         `json:"shadow"`
	Transparency   *float32        `json:"transparency"`
}
