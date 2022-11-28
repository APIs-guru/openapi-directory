package operations

import (
	"openapi/pkg/models/shared"
)

type BigtableadminProjectsInstancesClustersBackupsCopyPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type BigtableadminProjectsInstancesClustersBackupsCopyQueryParams struct {
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

type BigtableadminProjectsInstancesClustersBackupsCopySecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesClustersBackupsCopySecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesClustersBackupsCopySecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesClustersBackupsCopySecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesClustersBackupsCopySecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesClustersBackupsCopySecurity struct {
	Option1 *BigtableadminProjectsInstancesClustersBackupsCopySecurityOption1 `security:"option"`
	Option2 *BigtableadminProjectsInstancesClustersBackupsCopySecurityOption2 `security:"option"`
	Option3 *BigtableadminProjectsInstancesClustersBackupsCopySecurityOption3 `security:"option"`
	Option4 *BigtableadminProjectsInstancesClustersBackupsCopySecurityOption4 `security:"option"`
	Option5 *BigtableadminProjectsInstancesClustersBackupsCopySecurityOption5 `security:"option"`
}

type BigtableadminProjectsInstancesClustersBackupsCopyRequest struct {
	PathParams  BigtableadminProjectsInstancesClustersBackupsCopyPathParams
	QueryParams BigtableadminProjectsInstancesClustersBackupsCopyQueryParams
	Request     *shared.CopyBackupRequest `request:"mediaType=application/json"`
	Security    BigtableadminProjectsInstancesClustersBackupsCopySecurity
}

type BigtableadminProjectsInstancesClustersBackupsCopyResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
