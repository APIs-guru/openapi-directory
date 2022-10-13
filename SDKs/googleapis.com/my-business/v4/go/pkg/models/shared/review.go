package shared

type ReviewStarRatingEnum string

const (
	ReviewStarRatingEnumStarRatingUnspecified ReviewStarRatingEnum = "STAR_RATING_UNSPECIFIED"
	ReviewStarRatingEnumOne                   ReviewStarRatingEnum = "ONE"
	ReviewStarRatingEnumTwo                   ReviewStarRatingEnum = "TWO"
	ReviewStarRatingEnumThree                 ReviewStarRatingEnum = "THREE"
	ReviewStarRatingEnumFour                  ReviewStarRatingEnum = "FOUR"
	ReviewStarRatingEnumFive                  ReviewStarRatingEnum = "FIVE"
)

type Review struct {
	Comment     *string               `json:"comment"`
	CreateTime  *string               `json:"createTime"`
	Name        *string               `json:"name"`
	ReviewID    *string               `json:"reviewId"`
	ReviewReply *ReviewReply          `json:"reviewReply"`
	Reviewer    *Reviewer             `json:"reviewer"`
	StarRating  *ReviewStarRatingEnum `json:"starRating"`
	UpdateTime  *string               `json:"updateTime"`
}
