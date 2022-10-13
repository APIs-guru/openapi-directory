package operations

import (
	"openapi/pkg/models/shared"
)

type SQLDatabasesPatchPathParams struct {
	Database string `pathParam:"style=simple,explode=false,name=database"`
	Instance string `pathParam:"style=simple,explode=false,name=instance"`
	Project  string `pathParam:"style=simple,explode=false,name=project"`
}

type SQLDatabasesPatchQueryParams struct {
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

type SQLDatabasesPatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SQLDatabasesPatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SQLDatabasesPatchSecurity struct {
	Option1 *SQLDatabasesPatchSecurityOption1 `security:"option"`
	Option2 *SQLDatabasesPatchSecurityOption2 `security:"option"`
}

type SQLDatabasesPatchRequest struct {
	PathParams  SQLDatabasesPatchPathParams
	QueryParams SQLDatabasesPatchQueryParams
	Request     *shared.Database `request:"mediaType=application/json"`
	Security    SQLDatabasesPatchSecurity
}

type SQLDatabasesPatchResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
