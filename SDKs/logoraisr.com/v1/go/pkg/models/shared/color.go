package shared

type Color struct {
	Blue          *int64  `json:"blue"`
	Green         *int64  `json:"green"`
	Hex           *string `json:"hex"`
	NumberOfPixel *int64  `json:"number_of_pixel"`
	Percentage    *string `json:"percentage"`
	Red           *int64  `json:"red"`
}
