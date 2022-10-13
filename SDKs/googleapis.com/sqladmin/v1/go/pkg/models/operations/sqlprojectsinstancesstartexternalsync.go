package operations

import (
	"openapi/pkg/models/shared"
)

type SQLProjectsInstancesStartExternalSyncPathParams struct {
	Instance string `pathParam:"style=simple,explode=false,name=instance"`
	Project  string `pathParam:"style=simple,explode=false,name=project"`
}

type SQLProjectsInstancesStartExternalSyncQueryParams struct {
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

type SQLProjectsInstancesStartExternalSyncSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SQLProjectsInstancesStartExternalSyncSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SQLProjectsInstancesStartExternalSyncSecurity struct {
	Option1 *SQLProjectsInstancesStartExternalSyncSecurityOption1 `security:"option"`
	Option2 *SQLProjectsInstancesStartExternalSyncSecurityOption2 `security:"option"`
}

type SQLProjectsInstancesStartExternalSyncRequest struct {
	PathParams  SQLProjectsInstancesStartExternalSyncPathParams
	QueryParams SQLProjectsInstancesStartExternalSyncQueryParams
	Request     *shared.SQLInstancesStartExternalSyncRequest `request:"mediaType=application/json"`
	Security    SQLProjectsInstancesStartExternalSyncSecurity
}

type SQLProjectsInstancesStartExternalSyncResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
