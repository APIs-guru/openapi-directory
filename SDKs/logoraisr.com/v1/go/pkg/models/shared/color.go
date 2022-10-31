package shared

type Color struct {
	Blue          *int64  `json:"blue,omitempty"`
	Green         *int64  `json:"green,omitempty"`
	Hex           *string `json:"hex,omitempty"`
	NumberOfPixel *int64  `json:"number_of_pixel,omitempty"`
	Percentage    *string `json:"percentage,omitempty"`
	Red           *int64  `json:"red,omitempty"`
}
