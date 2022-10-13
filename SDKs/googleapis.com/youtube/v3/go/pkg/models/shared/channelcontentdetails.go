package shared

type ChannelContentDetailsRelatedPlaylists struct {
	Favorites    *string `json:"favorites"`
	Likes        *string `json:"likes"`
	Uploads      *string `json:"uploads"`
	WatchHistory *string `json:"watchHistory"`
	WatchLater   *string `json:"watchLater"`
}

type ChannelContentDetails struct {
	RelatedPlaylists *ChannelContentDetailsRelatedPlaylists `json:"relatedPlaylists"`
}
