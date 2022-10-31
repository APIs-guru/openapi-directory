package operations

import (
	"openapi/pkg/models/shared"
)

type FitnessUsersDataSourcesDatasetsDeletePathParams struct {
	DataSourceID string `pathParam:"style=simple,explode=false,name=dataSourceId"`
	DatasetID    string `pathParam:"style=simple,explode=false,name=datasetId"`
	UserID       string `pathParam:"style=simple,explode=false,name=userId"`
}

type FitnessUsersDataSourcesDatasetsDeleteQueryParams struct {
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

type FitnessUsersDataSourcesDatasetsDeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesDatasetsDeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesDatasetsDeleteSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesDatasetsDeleteSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesDatasetsDeleteSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesDatasetsDeleteSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesDatasetsDeleteSecurityOption7 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesDatasetsDeleteSecurityOption8 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesDatasetsDeleteSecurityOption9 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesDatasetsDeleteSecurityOption10 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesDatasetsDeleteSecurityOption11 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersDataSourcesDatasetsDeleteSecurity struct {
	Option1  *FitnessUsersDataSourcesDatasetsDeleteSecurityOption1  `security:"option"`
	Option2  *FitnessUsersDataSourcesDatasetsDeleteSecurityOption2  `security:"option"`
	Option3  *FitnessUsersDataSourcesDatasetsDeleteSecurityOption3  `security:"option"`
	Option4  *FitnessUsersDataSourcesDatasetsDeleteSecurityOption4  `security:"option"`
	Option5  *FitnessUsersDataSourcesDatasetsDeleteSecurityOption5  `security:"option"`
	Option6  *FitnessUsersDataSourcesDatasetsDeleteSecurityOption6  `security:"option"`
	Option7  *FitnessUsersDataSourcesDatasetsDeleteSecurityOption7  `security:"option"`
	Option8  *FitnessUsersDataSourcesDatasetsDeleteSecurityOption8  `security:"option"`
	Option9  *FitnessUsersDataSourcesDatasetsDeleteSecurityOption9  `security:"option"`
	Option10 *FitnessUsersDataSourcesDatasetsDeleteSecurityOption10 `security:"option"`
	Option11 *FitnessUsersDataSourcesDatasetsDeleteSecurityOption11 `security:"option"`
}

type FitnessUsersDataSourcesDatasetsDeleteRequest struct {
	PathParams  FitnessUsersDataSourcesDatasetsDeletePathParams
	QueryParams FitnessUsersDataSourcesDatasetsDeleteQueryParams
	Security    FitnessUsersDataSourcesDatasetsDeleteSecurity
}

type FitnessUsersDataSourcesDatasetsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
