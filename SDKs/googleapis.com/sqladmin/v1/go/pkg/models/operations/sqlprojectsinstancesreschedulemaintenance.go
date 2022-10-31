package operations

import (
	"openapi/pkg/models/shared"
)

type SQLProjectsInstancesRescheduleMaintenancePathParams struct {
	Instance string `pathParam:"style=simple,explode=false,name=instance"`
	Project  string `pathParam:"style=simple,explode=false,name=project"`
}

type SQLProjectsInstancesRescheduleMaintenanceQueryParams struct {
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

type SQLProjectsInstancesRescheduleMaintenanceSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SQLProjectsInstancesRescheduleMaintenanceSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SQLProjectsInstancesRescheduleMaintenanceSecurity struct {
	Option1 *SQLProjectsInstancesRescheduleMaintenanceSecurityOption1 `security:"option"`
	Option2 *SQLProjectsInstancesRescheduleMaintenanceSecurityOption2 `security:"option"`
}

type SQLProjectsInstancesRescheduleMaintenanceRequest struct {
	PathParams  SQLProjectsInstancesRescheduleMaintenancePathParams
	QueryParams SQLProjectsInstancesRescheduleMaintenanceQueryParams
	Request     *shared.SQLInstancesRescheduleMaintenanceRequestBody `request:"mediaType=application/json"`
	Security    SQLProjectsInstancesRescheduleMaintenanceSecurity
}

type SQLProjectsInstancesRescheduleMaintenanceResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
