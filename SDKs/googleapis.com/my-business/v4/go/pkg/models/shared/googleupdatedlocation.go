package shared

type GoogleUpdatedLocation struct {
	DiffMask *string   `json:"diffMask"`
	Location *Location `json:"location"`
}
