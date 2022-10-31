package operations

import (
	"openapi/pkg/models/shared"
)

type SQLDatabasesDeletePathParams struct {
	Database string `pathParam:"style=simple,explode=false,name=database"`
	Instance string `pathParam:"style=simple,explode=false,name=instance"`
	Project  string `pathParam:"style=simple,explode=false,name=project"`
}

type SQLDatabasesDeleteQueryParams struct {
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

type SQLDatabasesDeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SQLDatabasesDeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SQLDatabasesDeleteSecurity struct {
	Option1 *SQLDatabasesDeleteSecurityOption1 `security:"option"`
	Option2 *SQLDatabasesDeleteSecurityOption2 `security:"option"`
}

type SQLDatabasesDeleteRequest struct {
	PathParams  SQLDatabasesDeletePathParams
	QueryParams SQLDatabasesDeleteQueryParams
	Security    SQLDatabasesDeleteSecurity
}

type SQLDatabasesDeleteResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
