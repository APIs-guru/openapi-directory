package operations

import (
	"openapi/pkg/models/shared"
)

type IntegrationsCallbackGenerateTokenProductEnum string

const (
	IntegrationsCallbackGenerateTokenProductEnumUnspecifiedProduct IntegrationsCallbackGenerateTokenProductEnum = "UNSPECIFIED_PRODUCT"
	IntegrationsCallbackGenerateTokenProductEnumIP                 IntegrationsCallbackGenerateTokenProductEnum = "IP"
	IntegrationsCallbackGenerateTokenProductEnumApigee             IntegrationsCallbackGenerateTokenProductEnum = "APIGEE"
	IntegrationsCallbackGenerateTokenProductEnumSecurity           IntegrationsCallbackGenerateTokenProductEnum = "SECURITY"
)

type IntegrationsCallbackGenerateTokenQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                             `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                       `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                               `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                       `queryParam:"style=form,explode=true,name=callback"`
	Code           *string                                       `queryParam:"style=form,explode=true,name=code"`
	Fields         *string                                       `queryParam:"style=form,explode=true,name=fields"`
	GcpProjectID   *string                                       `queryParam:"style=form,explode=true,name=gcpProjectId"`
	Key            *string                                       `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                       `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                         `queryParam:"style=form,explode=true,name=prettyPrint"`
	Product        *IntegrationsCallbackGenerateTokenProductEnum `queryParam:"style=form,explode=true,name=product"`
	QuotaUser      *string                                       `queryParam:"style=form,explode=true,name=quotaUser"`
	RedirectURI    *string                                       `queryParam:"style=form,explode=true,name=redirectUri"`
	State          *string                                       `queryParam:"style=form,explode=true,name=state"`
	UploadType     *string                                       `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                       `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type IntegrationsCallbackGenerateTokenSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type IntegrationsCallbackGenerateTokenRequest struct {
	QueryParams IntegrationsCallbackGenerateTokenQueryParams
	Security    IntegrationsCallbackGenerateTokenSecurity
}

type IntegrationsCallbackGenerateTokenResponse struct {
	ContentType                                         string
	GoogleCloudIntegrationsV1alphaGenerateTokenResponse *shared.GoogleCloudIntegrationsV1alphaGenerateTokenResponse
	StatusCode                                          int64
}
