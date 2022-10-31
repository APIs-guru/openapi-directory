package operations

import (
	"openapi/pkg/models/shared"
)

type SQLBackupRunsGetPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	Instance string `pathParam:"style=simple,explode=false,name=instance"`
	Project  string `pathParam:"style=simple,explode=false,name=project"`
}

type SQLBackupRunsGetQueryParams struct {
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

type SQLBackupRunsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SQLBackupRunsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SQLBackupRunsGetSecurity struct {
	Option1 *SQLBackupRunsGetSecurityOption1 `security:"option"`
	Option2 *SQLBackupRunsGetSecurityOption2 `security:"option"`
}

type SQLBackupRunsGetRequest struct {
	PathParams  SQLBackupRunsGetPathParams
	QueryParams SQLBackupRunsGetQueryParams
	Security    SQLBackupRunsGetSecurity
}

type SQLBackupRunsGetResponse struct {
	BackupRun   *shared.BackupRun
	ContentType string
	StatusCode  int64
}
