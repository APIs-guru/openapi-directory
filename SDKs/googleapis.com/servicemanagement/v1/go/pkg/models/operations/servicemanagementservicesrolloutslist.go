package operations

import (
	"openapi/pkg/models/shared"
)

type ServicemanagementServicesRolloutsListPathParams struct {
	ServiceName string `pathParam:"style=simple,explode=false,name=serviceName"`
}

type ServicemanagementServicesRolloutsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Filter         *string           `queryParam:"style=form,explode=true,name=filter"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ServicemanagementServicesRolloutsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicemanagementServicesRolloutsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicemanagementServicesRolloutsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicemanagementServicesRolloutsListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicemanagementServicesRolloutsListSecurity struct {
	Option1 *ServicemanagementServicesRolloutsListSecurityOption1 `security:"option"`
	Option2 *ServicemanagementServicesRolloutsListSecurityOption2 `security:"option"`
	Option3 *ServicemanagementServicesRolloutsListSecurityOption3 `security:"option"`
	Option4 *ServicemanagementServicesRolloutsListSecurityOption4 `security:"option"`
}

type ServicemanagementServicesRolloutsListRequest struct {
	PathParams  ServicemanagementServicesRolloutsListPathParams
	QueryParams ServicemanagementServicesRolloutsListQueryParams
	Security    ServicemanagementServicesRolloutsListSecurity
}

type ServicemanagementServicesRolloutsListResponse struct {
	ContentType                 string
	ListServiceRolloutsResponse *shared.ListServiceRolloutsResponse
	StatusCode                  int64
}
