package operations

import (
	"openapi/pkg/models/shared"
)

type GetCodeReviewPathParams struct {
	ReviewID string `pathParam:"style=simple,explode=false,name=review-id"`
}

type GetCodeReviewSecurity struct {
	AccessToken shared.SchemeAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetCodeReviewRequest struct {
	PathParams GetCodeReviewPathParams
	Security   GetCodeReviewSecurity
}

type GetCodeReviewResponse struct {
	ContentType string
	StatusCode  int64
	CodeReviews []shared.CodeReview
}
