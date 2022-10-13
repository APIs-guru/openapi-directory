package shared

type Account struct {
	AccountManagement     *string                       `json:"accountManagement"`
	AdsLinks              []AccountAdsLink              `json:"adsLinks"`
	AdultContent          *bool                         `json:"adultContent"`
	AutomaticImprovements *AccountAutomaticImprovements `json:"automaticImprovements"`
	AutomaticLabelIds     []string                      `json:"automaticLabelIds"`
	BusinessInformation   *AccountBusinessInformation   `json:"businessInformation"`
	CSSID                 *string                       `json:"cssId"`
	GoogleMyBusinessLink  *AccountGoogleMyBusinessLink  `json:"googleMyBusinessLink"`
	ID                    *string                       `json:"id"`
	Kind                  *string                       `json:"kind"`
	LabelIds              []string                      `json:"labelIds"`
	Name                  *string                       `json:"name"`
	SellerID              *string                       `json:"sellerId"`
	Users                 []AccountUser                 `json:"users"`
	WebsiteURL            *string                       `json:"websiteUrl"`
	YoutubeChannelLinks   []AccountYouTubeChannelLink   `json:"youtubeChannelLinks"`
}
