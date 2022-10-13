package shared

type PlaceAddress struct {
	Formatted *string `json:"formatted"`
}

type PlacePosition struct {
	Latitude  *float64 `json:"latitude"`
	Longitude *float64 `json:"longitude"`
}

type Place struct {
	Address     *PlaceAddress  `json:"address"`
	DisplayName *string        `json:"displayName"`
	ID          *string        `json:"id"`
	Kind        *string        `json:"kind"`
	Position    *PlacePosition `json:"position"`
}
