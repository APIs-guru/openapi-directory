package shared

type Result struct {
	Colors               []Color `json:"colors"`
	Height               *int64  `json:"height"`
	NumberOfPixelInImage *int64  `json:"number_of_pixel_in_image"`
	Width                *int64  `json:"width"`
}
