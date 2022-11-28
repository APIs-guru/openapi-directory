package shared

type ChannelContentDetailsRelatedPlaylists struct {
	Favorites    *string `json:"favorites,omitempty"`
	Likes        *string `json:"likes,omitempty"`
	Uploads      *string `json:"uploads,omitempty"`
	WatchHistory *string `json:"watchHistory,omitempty"`
	WatchLater   *string `json:"watchLater,omitempty"`
}

// ChannelContentDetails
// Details about the content of a channel.
type ChannelContentDetails struct {
	RelatedPlaylists *ChannelContentDetailsRelatedPlaylists `json:"relatedPlaylists,omitempty"`
}
