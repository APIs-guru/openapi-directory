package shared

type ActivityContentDetails struct {
	Bulletin       *ActivityContentDetailsBulletin       `json:"bulletin"`
	ChannelItem    *ActivityContentDetailsChannelItem    `json:"channelItem"`
	Comment        *ActivityContentDetailsComment        `json:"comment"`
	Favorite       *ActivityContentDetailsFavorite       `json:"favorite"`
	Like           *ActivityContentDetailsLike           `json:"like"`
	PlaylistItem   *ActivityContentDetailsPlaylistItem   `json:"playlistItem"`
	PromotedItem   *ActivityContentDetailsPromotedItem   `json:"promotedItem"`
	Recommendation *ActivityContentDetailsRecommendation `json:"recommendation"`
	Social         *ActivityContentDetailsSocial         `json:"social"`
	Subscription   *ActivityContentDetailsSubscription   `json:"subscription"`
	Upload         *ActivityContentDetailsUpload         `json:"upload"`
}
