package operations

import (
	"openapi/pkg/models/shared"
)

type SourcerepoProjectsReposGetPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type SourcerepoProjectsReposGetQueryParams struct {
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

type SourcerepoProjectsReposGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SourcerepoProjectsReposGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SourcerepoProjectsReposGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SourcerepoProjectsReposGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SourcerepoProjectsReposGetSecurity struct {
	Option1 *SourcerepoProjectsReposGetSecurityOption1 `security:"option"`
	Option2 *SourcerepoProjectsReposGetSecurityOption2 `security:"option"`
	Option3 *SourcerepoProjectsReposGetSecurityOption3 `security:"option"`
	Option4 *SourcerepoProjectsReposGetSecurityOption4 `security:"option"`
}

type SourcerepoProjectsReposGetRequest struct {
	PathParams  SourcerepoProjectsReposGetPathParams
	QueryParams SourcerepoProjectsReposGetQueryParams
	Security    SourcerepoProjectsReposGetSecurity
}

type SourcerepoProjectsReposGetResponse struct {
	ContentType string
	Repo        *shared.Repo
	StatusCode  int64
}
