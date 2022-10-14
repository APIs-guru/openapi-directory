package shared

type LandlordPhotoModelResults struct {
	Count *int32               `json:"Count,omitempty"`
	Data  []LandlordPhotoModel `json:"Data,omitempty"`
}
