package operations

import (
	"openapi/pkg/models/shared"
)

type BooksPersonalizedstreamGetMaxAllowedMaturityRatingEnum string

const (
	BooksPersonalizedstreamGetMaxAllowedMaturityRatingEnumMaxAllowedMaturityRatingUndefined BooksPersonalizedstreamGetMaxAllowedMaturityRatingEnum = "MAX_ALLOWED_MATURITY_RATING_UNDEFINED"
	BooksPersonalizedstreamGetMaxAllowedMaturityRatingEnumMature                            BooksPersonalizedstreamGetMaxAllowedMaturityRatingEnum = "MATURE"
	BooksPersonalizedstreamGetMaxAllowedMaturityRatingEnumNotMature                         BooksPersonalizedstreamGetMaxAllowedMaturityRatingEnum = "not-mature"
)

type BooksPersonalizedstreamGetQueryParams struct {
	DollarXgafv              *shared.XgafvEnum                                       `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken              *string                                                 `queryParam:"style=form,explode=true,name=access_token"`
	Alt                      *shared.AltEnum                                         `queryParam:"style=form,explode=true,name=alt"`
	Callback                 *string                                                 `queryParam:"style=form,explode=true,name=callback"`
	Fields                   *string                                                 `queryParam:"style=form,explode=true,name=fields"`
	Key                      *string                                                 `queryParam:"style=form,explode=true,name=key"`
	Locale                   *string                                                 `queryParam:"style=form,explode=true,name=locale"`
	MaxAllowedMaturityRating *BooksPersonalizedstreamGetMaxAllowedMaturityRatingEnum `queryParam:"style=form,explode=true,name=maxAllowedMaturityRating"`
	OauthToken               *string                                                 `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint              *bool                                                   `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                *string                                                 `queryParam:"style=form,explode=true,name=quotaUser"`
	Source                   *string                                                 `queryParam:"style=form,explode=true,name=source"`
	UploadType               *string                                                 `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol           *string                                                 `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BooksPersonalizedstreamGetSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BooksPersonalizedstreamGetRequest struct {
	QueryParams BooksPersonalizedstreamGetQueryParams
	Security    BooksPersonalizedstreamGetSecurity
}

type BooksPersonalizedstreamGetResponse struct {
	ContentType       string
	Discoveryclusters *shared.Discoveryclusters
	StatusCode        int64
}
