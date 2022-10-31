package operations

import (
	"openapi/pkg/models/shared"
)

type DfareportingPlacementStrategiesInsertPathParams struct {
	ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
}

type DfareportingPlacementStrategiesInsertQueryParams struct {
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

type DfareportingPlacementStrategiesInsertSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DfareportingPlacementStrategiesInsertRequest struct {
	PathParams  DfareportingPlacementStrategiesInsertPathParams
	QueryParams DfareportingPlacementStrategiesInsertQueryParams
	Request     *shared.PlacementStrategy `request:"mediaType=application/json"`
	Security    DfareportingPlacementStrategiesInsertSecurity
}

type DfareportingPlacementStrategiesInsertResponse struct {
	ContentType       string
	PlacementStrategy *shared.PlacementStrategy
	StatusCode        int64
}
