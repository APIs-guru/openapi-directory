package shared

type VideoRatingRatingEnum string

const (
	VideoRatingRatingEnumNone    VideoRatingRatingEnum = "none"
	VideoRatingRatingEnumLike    VideoRatingRatingEnum = "like"
	VideoRatingRatingEnumDislike VideoRatingRatingEnum = "dislike"
)

type VideoRating struct {
	Rating  *VideoRatingRatingEnum `json:"rating"`
	VideoID *string                `json:"videoId"`
}
