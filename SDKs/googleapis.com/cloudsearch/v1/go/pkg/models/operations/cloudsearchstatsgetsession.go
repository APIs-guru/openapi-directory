package operations

import (
	"openapi/pkg/models/shared"
)

type CloudsearchStatsGetSessionQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	FromDateDay    *int64            `queryParam:"style=form,explode=true,name=fromDate.day"`
	FromDateMonth  *int64            `queryParam:"style=form,explode=true,name=fromDate.month"`
	FromDateYear   *int64            `queryParam:"style=form,explode=true,name=fromDate.year"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	ToDateDay      *int64            `queryParam:"style=form,explode=true,name=toDate.day"`
	ToDateMonth    *int64            `queryParam:"style=form,explode=true,name=toDate.month"`
	ToDateYear     *int64            `queryParam:"style=form,explode=true,name=toDate.year"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudsearchStatsGetSessionSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchStatsGetSessionSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchStatsGetSessionSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchStatsGetSessionSecurity struct {
	Option1 *CloudsearchStatsGetSessionSecurityOption1 `security:"option"`
	Option2 *CloudsearchStatsGetSessionSecurityOption2 `security:"option"`
	Option3 *CloudsearchStatsGetSessionSecurityOption3 `security:"option"`
}

type CloudsearchStatsGetSessionRequest struct {
	QueryParams CloudsearchStatsGetSessionQueryParams
	Security    CloudsearchStatsGetSessionSecurity
}

type CloudsearchStatsGetSessionResponse struct {
	ContentType                     string
	GetCustomerSessionStatsResponse *shared.GetCustomerSessionStatsResponse
	StatusCode                      int64
}
