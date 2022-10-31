package operations

import (
	"openapi/pkg/models/shared"
)

type DatastoreProjectsRunQueryPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DatastoreProjectsRunQueryQueryParams struct {
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

type DatastoreProjectsRunQuerySecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DatastoreProjectsRunQuerySecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DatastoreProjectsRunQuerySecurity struct {
	Option1 *DatastoreProjectsRunQuerySecurityOption1 `security:"option"`
	Option2 *DatastoreProjectsRunQuerySecurityOption2 `security:"option"`
}

type DatastoreProjectsRunQueryRequest struct {
	PathParams  DatastoreProjectsRunQueryPathParams
	QueryParams DatastoreProjectsRunQueryQueryParams
	Request     *shared.RunQueryRequest `request:"mediaType=application/json"`
	Security    DatastoreProjectsRunQuerySecurity
}

type DatastoreProjectsRunQueryResponse struct {
	ContentType      string
	RunQueryResponse *shared.RunQueryResponse
	StatusCode       int64
}
