package operations

import (
	"openapi/pkg/models/shared"
)

type RedisProjectsLocationsOperationsDeletePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type RedisProjectsLocationsOperationsDeleteQueryParams struct {
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

type RedisProjectsLocationsOperationsDeleteSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type RedisProjectsLocationsOperationsDeleteRequest struct {
	PathParams  RedisProjectsLocationsOperationsDeletePathParams
	QueryParams RedisProjectsLocationsOperationsDeleteQueryParams
	Security    RedisProjectsLocationsOperationsDeleteSecurity
}

type RedisProjectsLocationsOperationsDeleteResponse struct {
	ContentType string
	Empty       map[string]interface{}
	StatusCode  int64
}
