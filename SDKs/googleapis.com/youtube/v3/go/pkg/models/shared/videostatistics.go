package shared

type VideoStatistics struct {
	CommentCount  *string `json:"commentCount"`
	DislikeCount  *string `json:"dislikeCount"`
	FavoriteCount *string `json:"favoriteCount"`
	LikeCount     *string `json:"likeCount"`
	ViewCount     *string `json:"viewCount"`
}
