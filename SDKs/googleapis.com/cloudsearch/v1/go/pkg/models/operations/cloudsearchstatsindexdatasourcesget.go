package operations

import (
	"openapi/pkg/models/shared"
)

type CloudsearchStatsIndexDatasourcesGetPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CloudsearchStatsIndexDatasourcesGetQueryParams struct {
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

type CloudsearchStatsIndexDatasourcesGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchStatsIndexDatasourcesGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchStatsIndexDatasourcesGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchStatsIndexDatasourcesGetSecurity struct {
	Option1 *CloudsearchStatsIndexDatasourcesGetSecurityOption1 `security:"option"`
	Option2 *CloudsearchStatsIndexDatasourcesGetSecurityOption2 `security:"option"`
	Option3 *CloudsearchStatsIndexDatasourcesGetSecurityOption3 `security:"option"`
}

type CloudsearchStatsIndexDatasourcesGetRequest struct {
	PathParams  CloudsearchStatsIndexDatasourcesGetPathParams
	QueryParams CloudsearchStatsIndexDatasourcesGetQueryParams
	Security    CloudsearchStatsIndexDatasourcesGetSecurity
}

type CloudsearchStatsIndexDatasourcesGetResponse struct {
	ContentType                     string
	GetDataSourceIndexStatsResponse *shared.GetDataSourceIndexStatsResponse
	StatusCode                      int64
}
