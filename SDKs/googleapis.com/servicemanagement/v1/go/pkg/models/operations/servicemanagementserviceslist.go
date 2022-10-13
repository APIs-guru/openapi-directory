package operations

import (
	"openapi/pkg/models/shared"
)

type ServicemanagementServicesListQueryParams struct {
	DollarXgafv       *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken       *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt               *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback          *string           `queryParam:"style=form,explode=true,name=callback"`
	ConsumerID        *string           `queryParam:"style=form,explode=true,name=consumerId"`
	Fields            *string           `queryParam:"style=form,explode=true,name=fields"`
	Key               *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken        *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize          *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken         *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint       *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	ProducerProjectID *string           `queryParam:"style=form,explode=true,name=producerProjectId"`
	QuotaUser         *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType        *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol    *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ServicemanagementServicesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicemanagementServicesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicemanagementServicesListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicemanagementServicesListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicemanagementServicesListSecurity struct {
	Option1 *ServicemanagementServicesListSecurityOption1 `security:"option"`
	Option2 *ServicemanagementServicesListSecurityOption2 `security:"option"`
	Option3 *ServicemanagementServicesListSecurityOption3 `security:"option"`
	Option4 *ServicemanagementServicesListSecurityOption4 `security:"option"`
}

type ServicemanagementServicesListRequest struct {
	QueryParams ServicemanagementServicesListQueryParams
	Security    ServicemanagementServicesListSecurity
}

type ServicemanagementServicesListResponse struct {
	ContentType          string
	ListServicesResponse *shared.ListServicesResponse
	StatusCode           int64
}
