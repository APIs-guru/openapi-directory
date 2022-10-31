package operations

import (
	"openapi/pkg/models/shared"
)

type FitnessUsersDataSourcesUpdatePathParams struct {
	DataSourceID string `pathParam:"style=simple,explode=false,name=dataSourceId"`
	UserID       string `pathParam:"style=simple,explode=false,name=userId"`
}

type FitnessUsersDataSourcesUpdateQueryParams struct {
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

type FitnessUsersDataSourcesUpdateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesUpdateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesUpdateSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesUpdateSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesUpdateSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesUpdateSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesUpdateSecurityOption7 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesUpdateSecurityOption8 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesUpdateSecurityOption9 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesUpdateSecurityOption10 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesUpdateSecurityOption11 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesUpdateSecurity struct {
	Option1  *FitnessUsersDataSourcesUpdateSecurityOption1  `security:"option"`
	Option2  *FitnessUsersDataSourcesUpdateSecurityOption2  `security:"option"`
	Option3  *FitnessUsersDataSourcesUpdateSecurityOption3  `security:"option"`
	Option4  *FitnessUsersDataSourcesUpdateSecurityOption4  `security:"option"`
	Option5  *FitnessUsersDataSourcesUpdateSecurityOption5  `security:"option"`
	Option6  *FitnessUsersDataSourcesUpdateSecurityOption6  `security:"option"`
	Option7  *FitnessUsersDataSourcesUpdateSecurityOption7  `security:"option"`
	Option8  *FitnessUsersDataSourcesUpdateSecurityOption8  `security:"option"`
	Option9  *FitnessUsersDataSourcesUpdateSecurityOption9  `security:"option"`
	Option10 *FitnessUsersDataSourcesUpdateSecurityOption10 `security:"option"`
	Option11 *FitnessUsersDataSourcesUpdateSecurityOption11 `security:"option"`
}

type FitnessUsersDataSourcesUpdateRequest struct {
	PathParams  FitnessUsersDataSourcesUpdatePathParams
	QueryParams FitnessUsersDataSourcesUpdateQueryParams
	Request     *shared.DataSource `request:"mediaType=application/json"`
	Security    FitnessUsersDataSourcesUpdateSecurity
}

type FitnessUsersDataSourcesUpdateResponse struct {
	ContentType string
	DataSource  *shared.DataSource
	StatusCode  int64
}
