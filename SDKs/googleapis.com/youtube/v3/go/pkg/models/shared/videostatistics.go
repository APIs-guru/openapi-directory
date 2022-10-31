package shared



type VideoStatistics struct {
    CommentCount *string `json:"commentCount,omitempty"`
    DislikeCount *string `json:"dislikeCount,omitempty"`
    FavoriteCount *string `json:"favoriteCount,omitempty"`
    LikeCount *string `json:"likeCount,omitempty"`
    ViewCount *string `json:"viewCount,omitempty"`
    
}

