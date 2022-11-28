package shared

// LandlordPhotoModelResults
// Holds results from a paged query returning LandlordPhotoModel values
type LandlordPhotoModelResults struct {
	Count *int32               `json:"Count,omitempty"`
	Data  []LandlordPhotoModel `json:"Data,omitempty"`
}
