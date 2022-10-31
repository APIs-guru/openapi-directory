package shared

type VideoAgeGatingVideoGameRatingEnum string

const (
	VideoAgeGatingVideoGameRatingEnumAnyone  VideoAgeGatingVideoGameRatingEnum = "anyone"
	VideoAgeGatingVideoGameRatingEnumM15Plus VideoAgeGatingVideoGameRatingEnum = "m15Plus"
	VideoAgeGatingVideoGameRatingEnumM16Plus VideoAgeGatingVideoGameRatingEnum = "m16Plus"
	VideoAgeGatingVideoGameRatingEnumM17Plus VideoAgeGatingVideoGameRatingEnum = "m17Plus"
)

type VideoAgeGating struct {
	AlcoholContent  *bool                              `json:"alcoholContent,omitempty"`
	Restricted      *bool                              `json:"restricted,omitempty"`
	VideoGameRating *VideoAgeGatingVideoGameRatingEnum `json:"videoGameRating,omitempty"`
}
