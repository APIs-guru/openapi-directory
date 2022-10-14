package shared

type Result struct {
	Colors               []Color `json:"colors,omitempty"`
	Height               *int64  `json:"height,omitempty"`
	NumberOfPixelInImage *int64  `json:"number_of_pixel_in_image,omitempty"`
	Width                *int64  `json:"width,omitempty"`
}
