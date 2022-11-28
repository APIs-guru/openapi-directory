package shared

// ActivityContentDetails
// Details about the content of an activity: the video that was shared, the channel that was subscribed to, etc.
type ActivityContentDetails struct {
	Bulletin       *ActivityContentDetailsBulletin       `json:"bulletin,omitempty"`
	ChannelItem    *ActivityContentDetailsChannelItem    `json:"channelItem,omitempty"`
	Comment        *ActivityContentDetailsComment        `json:"comment,omitempty"`
	Favorite       *ActivityContentDetailsFavorite       `json:"favorite,omitempty"`
	Like           *ActivityContentDetailsLike           `json:"like,omitempty"`
	PlaylistItem   *ActivityContentDetailsPlaylistItem   `json:"playlistItem,omitempty"`
	PromotedItem   *ActivityContentDetailsPromotedItem   `json:"promotedItem,omitempty"`
	Recommendation *ActivityContentDetailsRecommendation `json:"recommendation,omitempty"`
	Social         *ActivityContentDetailsSocial         `json:"social,omitempty"`
	Subscription   *ActivityContentDetailsSubscription   `json:"subscription,omitempty"`
	Upload         *ActivityContentDetailsUpload         `json:"upload,omitempty"`
}
