package operations

import (
	"openapi/pkg/models/shared"
)

type DfareportingFloodlightConfigurationsUpdatePathParams struct {
	ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
}

type DfareportingFloodlightConfigurationsUpdateQueryParams struct {
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

type DfareportingFloodlightConfigurationsUpdateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DfareportingFloodlightConfigurationsUpdateRequest struct {
	PathParams  DfareportingFloodlightConfigurationsUpdatePathParams
	QueryParams DfareportingFloodlightConfigurationsUpdateQueryParams
	Request     *shared.FloodlightConfiguration `request:"mediaType=application/json"`
	Security    DfareportingFloodlightConfigurationsUpdateSecurity
}

type DfareportingFloodlightConfigurationsUpdateResponse struct {
	ContentType             string
	FloodlightConfiguration *shared.FloodlightConfiguration
	StatusCode              int64
}
