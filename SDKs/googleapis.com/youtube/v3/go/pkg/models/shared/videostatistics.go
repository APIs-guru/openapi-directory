package shared

// VideoStatistics
// Statistics about the video, such as the number of times the video was viewed or liked.
type VideoStatistics struct {
	CommentCount  *string `json:"commentCount,omitempty"`
	DislikeCount  *string `json:"dislikeCount,omitempty"`
	FavoriteCount *string `json:"favoriteCount,omitempty"`
	LikeCount     *string `json:"likeCount,omitempty"`
	ViewCount     *string `json:"viewCount,omitempty"`
}
