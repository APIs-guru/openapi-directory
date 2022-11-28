package shared

// Account
// Account data. After the creation of a new account it may take a few minutes before it's fully operational. The methods delete, insert, and update require the admin role.
type Account struct {
	AccountManagement     *string                       `json:"accountManagement,omitempty"`
	AdsLinks              []AccountAdsLink              `json:"adsLinks,omitempty"`
	AdultContent          *bool                         `json:"adultContent,omitempty"`
	AutomaticImprovements *AccountAutomaticImprovements `json:"automaticImprovements,omitempty"`
	AutomaticLabelIds     []string                      `json:"automaticLabelIds,omitempty"`
	BusinessInformation   *AccountBusinessInformation   `json:"businessInformation,omitempty"`
	CSSID                 *string                       `json:"cssId,omitempty"`
	GoogleMyBusinessLink  *AccountGoogleMyBusinessLink  `json:"googleMyBusinessLink,omitempty"`
	ID                    *string                       `json:"id,omitempty"`
	Kind                  *string                       `json:"kind,omitempty"`
	LabelIds              []string                      `json:"labelIds,omitempty"`
	Name                  *string                       `json:"name,omitempty"`
	SellerID              *string                       `json:"sellerId,omitempty"`
	Users                 []AccountUser                 `json:"users,omitempty"`
	WebsiteURL            *string                       `json:"websiteUrl,omitempty"`
	YoutubeChannelLinks   []AccountYouTubeChannelLink   `json:"youtubeChannelLinks,omitempty"`
}

// AccountInput
// Account data. After the creation of a new account it may take a few minutes before it's fully operational. The methods delete, insert, and update require the admin role.
type AccountInput struct {
	AdsLinks              []AccountAdsLink                   `json:"adsLinks,omitempty"`
	AdultContent          *bool                              `json:"adultContent,omitempty"`
	AutomaticImprovements *AccountAutomaticImprovementsInput `json:"automaticImprovements,omitempty"`
	AutomaticLabelIds     []string                           `json:"automaticLabelIds,omitempty"`
	BusinessInformation   *AccountBusinessInformation        `json:"businessInformation,omitempty"`
	CSSID                 *string                            `json:"cssId,omitempty"`
	GoogleMyBusinessLink  *AccountGoogleMyBusinessLink       `json:"googleMyBusinessLink,omitempty"`
	ID                    *string                            `json:"id,omitempty"`
	Kind                  *string                            `json:"kind,omitempty"`
	LabelIds              []string                           `json:"labelIds,omitempty"`
	Name                  *string                            `json:"name,omitempty"`
	SellerID              *string                            `json:"sellerId,omitempty"`
	Users                 []AccountUser                      `json:"users,omitempty"`
	WebsiteURL            *string                            `json:"websiteUrl,omitempty"`
	YoutubeChannelLinks   []AccountYouTubeChannelLink        `json:"youtubeChannelLinks,omitempty"`
}
