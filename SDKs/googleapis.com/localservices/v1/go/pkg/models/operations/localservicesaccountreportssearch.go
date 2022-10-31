package operations

import (
	"openapi/pkg/models/shared"
)

type LocalservicesAccountReportsSearchQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	EndDateDay     *int64            `queryParam:"style=form,explode=true,name=endDate.day"`
	EndDateMonth   *int64            `queryParam:"style=form,explode=true,name=endDate.month"`
	EndDateYear    *int64            `queryParam:"style=form,explode=true,name=endDate.year"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	Query          *string           `queryParam:"style=form,explode=true,name=query"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	StartDateDay   *int64            `queryParam:"style=form,explode=true,name=startDate.day"`
	StartDateMonth *int64            `queryParam:"style=form,explode=true,name=startDate.month"`
	StartDateYear  *int64            `queryParam:"style=form,explode=true,name=startDate.year"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type LocalservicesAccountReportsSearchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LocalservicesAccountReportsSearchRequest struct {
	QueryParams LocalservicesAccountReportsSearchQueryParams
	Security    LocalservicesAccountReportsSearchSecurity
}

type LocalservicesAccountReportsSearchResponse struct {
	ContentType                                                      string
	GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse *shared.GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse
	StatusCode                                                       int64
}
