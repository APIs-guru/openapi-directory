package operations

import (
	"openapi/pkg/models/shared"
)

type ServicenetworkingServicesDNSRecordSetsRemovePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type ServicenetworkingServicesDNSRecordSetsRemoveQueryParams struct {
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

type ServicenetworkingServicesDNSRecordSetsRemoveSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicenetworkingServicesDNSRecordSetsRemoveSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicenetworkingServicesDNSRecordSetsRemoveSecurity struct {
	Option1 *ServicenetworkingServicesDNSRecordSetsRemoveSecurityOption1 `security:"option"`
	Option2 *ServicenetworkingServicesDNSRecordSetsRemoveSecurityOption2 `security:"option"`
}

type ServicenetworkingServicesDNSRecordSetsRemoveRequest struct {
	PathParams  ServicenetworkingServicesDNSRecordSetsRemovePathParams
	QueryParams ServicenetworkingServicesDNSRecordSetsRemoveQueryParams
	Request     *shared.RemoveDNSRecordSetRequest `request:"mediaType=application/json"`
	Security    ServicenetworkingServicesDNSRecordSetsRemoveSecurity
}

type ServicenetworkingServicesDNSRecordSetsRemoveResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
