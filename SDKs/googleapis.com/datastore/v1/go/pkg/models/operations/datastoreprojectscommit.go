package operations

import (
	"openapi/pkg/models/shared"
)

type DatastoreProjectsCommitPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DatastoreProjectsCommitQueryParams struct {
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

type DatastoreProjectsCommitSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DatastoreProjectsCommitSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DatastoreProjectsCommitSecurity struct {
	Option1 *DatastoreProjectsCommitSecurityOption1 `security:"option"`
	Option2 *DatastoreProjectsCommitSecurityOption2 `security:"option"`
}

type DatastoreProjectsCommitRequest struct {
	PathParams  DatastoreProjectsCommitPathParams
	QueryParams DatastoreProjectsCommitQueryParams
	Request     *shared.CommitRequest `request:"mediaType=application/json"`
	Security    DatastoreProjectsCommitSecurity
}

type DatastoreProjectsCommitResponse struct {
	CommitResponse *shared.CommitResponse
	ContentType    string
	StatusCode     int64
}
