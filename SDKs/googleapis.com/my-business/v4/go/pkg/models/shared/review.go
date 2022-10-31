package shared




type ReviewStarRatingEnum string

const (
    ReviewStarRatingEnumStarRatingUnspecified ReviewStarRatingEnum = "STAR_RATING_UNSPECIFIED"
ReviewStarRatingEnumOne ReviewStarRatingEnum = "ONE"
ReviewStarRatingEnumTwo ReviewStarRatingEnum = "TWO"
ReviewStarRatingEnumThree ReviewStarRatingEnum = "THREE"
ReviewStarRatingEnumFour ReviewStarRatingEnum = "FOUR"
ReviewStarRatingEnumFive ReviewStarRatingEnum = "FIVE"
)


type Review struct {
    Comment *string `json:"comment,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    Name *string `json:"name,omitempty"`
    ReviewID *string `json:"reviewId,omitempty"`
    ReviewReply *ReviewReply `json:"reviewReply,omitempty"`
    Reviewer *Reviewer `json:"reviewer,omitempty"`
    StarRating *ReviewStarRatingEnum `json:"starRating,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

