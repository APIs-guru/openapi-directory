package shared



type Account struct {
    AdultContent *bool `json:"adultContent,omitempty"`
    AdwordsLinks []AccountAdwordsLink `json:"adwordsLinks,omitempty"`
    BusinessInformation *AccountBusinessInformation `json:"businessInformation,omitempty"`
    GoogleMyBusinessLink *AccountGoogleMyBusinessLink `json:"googleMyBusinessLink,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Name *string `json:"name,omitempty"`
    ReviewsURL *string `json:"reviewsUrl,omitempty"`
    SellerID *string `json:"sellerId,omitempty"`
    Users []AccountUser `json:"users,omitempty"`
    WebsiteURL *string `json:"websiteUrl,omitempty"`
    YoutubeChannelLinks []AccountYouTubeChannelLink `json:"youtubeChannelLinks,omitempty"`
    
}

