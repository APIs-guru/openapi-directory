package operations

import (
	"openapi/pkg/models/shared"
)

type GkebackupProjectsLocationsBackupPlansCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type GkebackupProjectsLocationsBackupPlansCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	BackupPlanID   *string           `queryParam:"style=form,explode=true,name=backupPlanId"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type GkebackupProjectsLocationsBackupPlansCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GkebackupProjectsLocationsBackupPlansCreateRequest struct {
	PathParams  GkebackupProjectsLocationsBackupPlansCreatePathParams
	QueryParams GkebackupProjectsLocationsBackupPlansCreateQueryParams
	Request     *shared.BackupPlan `request:"mediaType=application/json"`
	Security    GkebackupProjectsLocationsBackupPlansCreateSecurity
}

type GkebackupProjectsLocationsBackupPlansCreateResponse struct {
	ContentType                string
	GoogleLongrunningOperation *shared.GoogleLongrunningOperation
	StatusCode                 int64
}
