package shared

// Playlist
// A *playlist* resource represents a YouTube playlist. A playlist is a collection of videos that can be viewed sequentially and shared with other users. A playlist can contain up to 200 videos, and YouTube does not limit the number of playlists that each user creates. By default, playlists are publicly visible to other users, but playlists can be public or private. YouTube also uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history - watch later To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the playlistItems.insert and playlistItems.delete methods.
type Playlist struct {
	ContentDetails *PlaylistContentDetails         `json:"contentDetails,omitempty"`
	Etag           *string                         `json:"etag,omitempty"`
	ID             *string                         `json:"id,omitempty"`
	Kind           *string                         `json:"kind,omitempty"`
	Localizations  map[string]PlaylistLocalization `json:"localizations,omitempty"`
	Player         *PlaylistPlayer                 `json:"player,omitempty"`
	Snippet        *PlaylistSnippet                `json:"snippet,omitempty"`
	Status         *PlaylistStatus                 `json:"status,omitempty"`
}
