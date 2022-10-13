package shared

type Account struct {
	AdultContent         *bool                        `json:"adultContent"`
	AdwordsLinks         []AccountAdwordsLink         `json:"adwordsLinks"`
	BusinessInformation  *AccountBusinessInformation  `json:"businessInformation"`
	GoogleMyBusinessLink *AccountGoogleMyBusinessLink `json:"googleMyBusinessLink"`
	ID                   *string                      `json:"id"`
	Kind                 *string                      `json:"kind"`
	Name                 *string                      `json:"name"`
	ReviewsURL           *string                      `json:"reviewsUrl"`
	SellerID             *string                      `json:"sellerId"`
	Users                []AccountUser                `json:"users"`
	WebsiteURL           *string                      `json:"websiteUrl"`
	YoutubeChannelLinks  []AccountYouTubeChannelLink  `json:"youtubeChannelLinks"`
}
