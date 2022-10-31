package operations

import (
	"openapi/pkg/models/shared"
)

type GetParentalRatingsSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetParentalRatingsRequest struct {
	Security GetParentalRatingsSecurity
}

type GetParentalRatingsResponse struct {
	ContentType     string
	ParentalRatings []shared.ParentalRating
	StatusCode      int64
}
