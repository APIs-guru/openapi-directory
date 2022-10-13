package shared

type PodcastLookingForField struct {
	Cohosts        *bool `json:"cohosts"`
	CrossPromotion *bool `json:"cross_promotion"`
	Guests         *bool `json:"guests"`
	Sponsors       *bool `json:"sponsors"`
}
