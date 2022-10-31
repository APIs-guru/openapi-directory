package operations

import (
	"openapi/pkg/models/shared"
)

type FitnessUsersDataSourcesGetPathParams struct {
	DataSourceID string `pathParam:"style=simple,explode=false,name=dataSourceId"`
	UserID       string `pathParam:"style=simple,explode=false,name=userId"`
}

type FitnessUsersDataSourcesGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type FitnessUsersDataSourcesGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesGetSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesGetSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesGetSecurityOption7 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesGetSecurityOption8 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesGetSecurityOption9 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesGetSecurityOption10 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesGetSecurityOption11 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesGetSecurityOption12 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesGetSecurityOption13 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesGetSecurityOption14 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesGetSecurityOption15 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesGetSecurityOption16 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesGetSecurityOption17 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesGetSecurityOption18 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesGetSecurityOption19 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesGetSecurityOption20 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesGetSecurityOption21 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesGetSecurityOption22 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesGetSecurity struct {
	Option1  *FitnessUsersDataSourcesGetSecurityOption1  `security:"option"`
	Option2  *FitnessUsersDataSourcesGetSecurityOption2  `security:"option"`
	Option3  *FitnessUsersDataSourcesGetSecurityOption3  `security:"option"`
	Option4  *FitnessUsersDataSourcesGetSecurityOption4  `security:"option"`
	Option5  *FitnessUsersDataSourcesGetSecurityOption5  `security:"option"`
	Option6  *FitnessUsersDataSourcesGetSecurityOption6  `security:"option"`
	Option7  *FitnessUsersDataSourcesGetSecurityOption7  `security:"option"`
	Option8  *FitnessUsersDataSourcesGetSecurityOption8  `security:"option"`
	Option9  *FitnessUsersDataSourcesGetSecurityOption9  `security:"option"`
	Option10 *FitnessUsersDataSourcesGetSecurityOption10 `security:"option"`
	Option11 *FitnessUsersDataSourcesGetSecurityOption11 `security:"option"`
	Option12 *FitnessUsersDataSourcesGetSecurityOption12 `security:"option"`
	Option13 *FitnessUsersDataSourcesGetSecurityOption13 `security:"option"`
	Option14 *FitnessUsersDataSourcesGetSecurityOption14 `security:"option"`
	Option15 *FitnessUsersDataSourcesGetSecurityOption15 `security:"option"`
	Option16 *FitnessUsersDataSourcesGetSecurityOption16 `security:"option"`
	Option17 *FitnessUsersDataSourcesGetSecurityOption17 `security:"option"`
	Option18 *FitnessUsersDataSourcesGetSecurityOption18 `security:"option"`
	Option19 *FitnessUsersDataSourcesGetSecurityOption19 `security:"option"`
	Option20 *FitnessUsersDataSourcesGetSecurityOption20 `security:"option"`
	Option21 *FitnessUsersDataSourcesGetSecurityOption21 `security:"option"`
	Option22 *FitnessUsersDataSourcesGetSecurityOption22 `security:"option"`
}

type FitnessUsersDataSourcesGetRequest struct {
	PathParams  FitnessUsersDataSourcesGetPathParams
	QueryParams FitnessUsersDataSourcesGetQueryParams
	Security    FitnessUsersDataSourcesGetSecurity
}

type FitnessUsersDataSourcesGetResponse struct {
	ContentType string
	DataSource  *shared.DataSource
	StatusCode  int64
}
