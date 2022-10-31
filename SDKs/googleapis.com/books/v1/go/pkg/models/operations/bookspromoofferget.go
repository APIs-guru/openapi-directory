package operations

import (
	"openapi/pkg/models/shared"
)

type BooksPromoofferGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	AndroidID      *string           `queryParam:"style=form,explode=true,name=androidId"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Device         *string           `queryParam:"style=form,explode=true,name=device"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	Manufacturer   *string           `queryParam:"style=form,explode=true,name=manufacturer"`
	Model          *string           `queryParam:"style=form,explode=true,name=model"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	Product        *string           `queryParam:"style=form,explode=true,name=product"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	Serial         *string           `queryParam:"style=form,explode=true,name=serial"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BooksPromoofferGetSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BooksPromoofferGetRequest struct {
	QueryParams BooksPromoofferGetQueryParams
	Security    BooksPromoofferGetSecurity
}

type BooksPromoofferGetResponse struct {
	ContentType string
	Offers      *shared.Offers
	StatusCode  int64
}
