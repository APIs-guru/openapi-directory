package shared

type VideoRatingRatingEnum string

const (
	VideoRatingRatingEnumNone    VideoRatingRatingEnum = "none"
	VideoRatingRatingEnumLike    VideoRatingRatingEnum = "like"
	VideoRatingRatingEnumDislike VideoRatingRatingEnum = "dislike"
)

// VideoRating
// Basic details about rating of a video.
type VideoRating struct {
	Rating  *VideoRatingRatingEnum `json:"rating,omitempty"`
	VideoID *string                `json:"videoId,omitempty"`
}
