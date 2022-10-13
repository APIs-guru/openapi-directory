package shared

type LandlordPhotoModelResults struct {
	Count *int32               `json:"Count"`
	Data  []LandlordPhotoModel `json:"Data"`
}
