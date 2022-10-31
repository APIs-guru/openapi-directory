package operations

import (
	"openapi/pkg/models/shared"
)

type ContentDatafeedstatusesGetPathParams struct {
	DatafeedID string `pathParam:"style=simple,explode=false,name=datafeedId"`
	MerchantID string `pathParam:"style=simple,explode=false,name=merchantId"`
}

type ContentDatafeedstatusesGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Country        *string           `queryParam:"style=form,explode=true,name=country"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	Language       *string           `queryParam:"style=form,explode=true,name=language"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ContentDatafeedstatusesGetSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ContentDatafeedstatusesGetRequest struct {
	PathParams  ContentDatafeedstatusesGetPathParams
	QueryParams ContentDatafeedstatusesGetQueryParams
	Security    ContentDatafeedstatusesGetSecurity
}

type ContentDatafeedstatusesGetResponse struct {
	ContentType    string
	DatafeedStatus *shared.DatafeedStatus
	StatusCode     int64
}
