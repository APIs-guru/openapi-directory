package operations

import (
	"openapi/pkg/models/shared"
)

type YoutubeAnalyticsReportsQueryQueryParams struct {
	DollarXgafv                  *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                  *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                          *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback                     *string           `queryParam:"style=form,explode=true,name=callback"`
	Currency                     *string           `queryParam:"style=form,explode=true,name=currency"`
	Dimensions                   *string           `queryParam:"style=form,explode=true,name=dimensions"`
	EndDate                      *string           `queryParam:"style=form,explode=true,name=endDate"`
	Fields                       *string           `queryParam:"style=form,explode=true,name=fields"`
	Filters                      *string           `queryParam:"style=form,explode=true,name=filters"`
	Ids                          *string           `queryParam:"style=form,explode=true,name=ids"`
	IncludeHistoricalChannelData *bool             `queryParam:"style=form,explode=true,name=includeHistoricalChannelData"`
	Key                          *string           `queryParam:"style=form,explode=true,name=key"`
	MaxResults                   *int64            `queryParam:"style=form,explode=true,name=maxResults"`
	Metrics                      *string           `queryParam:"style=form,explode=true,name=metrics"`
	OauthToken                   *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint                  *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                    *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	Sort                         *string           `queryParam:"style=form,explode=true,name=sort"`
	StartDate                    *string           `queryParam:"style=form,explode=true,name=startDate"`
	StartIndex                   *int64            `queryParam:"style=form,explode=true,name=startIndex"`
	UploadType                   *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol               *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type YoutubeAnalyticsReportsQuerySecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeAnalyticsReportsQuerySecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeAnalyticsReportsQuerySecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeAnalyticsReportsQuerySecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeAnalyticsReportsQuerySecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeAnalyticsReportsQuerySecurity struct {
	Option1 *YoutubeAnalyticsReportsQuerySecurityOption1 `security:"option"`
	Option2 *YoutubeAnalyticsReportsQuerySecurityOption2 `security:"option"`
	Option3 *YoutubeAnalyticsReportsQuerySecurityOption3 `security:"option"`
	Option4 *YoutubeAnalyticsReportsQuerySecurityOption4 `security:"option"`
	Option5 *YoutubeAnalyticsReportsQuerySecurityOption5 `security:"option"`
}

type YoutubeAnalyticsReportsQueryRequest struct {
	QueryParams YoutubeAnalyticsReportsQueryQueryParams
	Security    YoutubeAnalyticsReportsQuerySecurity
}

type YoutubeAnalyticsReportsQueryResponse struct {
	ContentType   string
	QueryResponse *shared.QueryResponse
	StatusCode    int64
}
