package shared



type ImageProperties struct {
    Brightness *float32 `json:"brightness,omitempty"`
    Contrast *float32 `json:"contrast,omitempty"`
    CropProperties *CropProperties `json:"cropProperties,omitempty"`
    Link *Link `json:"link,omitempty"`
    Outline *Outline `json:"outline,omitempty"`
    Recolor *Recolor `json:"recolor,omitempty"`
    Shadow *Shadow `json:"shadow,omitempty"`
    Transparency *float32 `json:"transparency,omitempty"`
    
}

