package operations

import (
	"openapi/pkg/models/shared"
)

type CloudresourcemanagerTagValuesTagHoldsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type CloudresourcemanagerTagValuesTagHoldsCreateQueryParams struct {
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
	ValidateOnly   *bool             `queryParam:"style=form,explode=true,name=validateOnly"`
}

type CloudresourcemanagerTagValuesTagHoldsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudresourcemanagerTagValuesTagHoldsCreateRequest struct {
	PathParams  CloudresourcemanagerTagValuesTagHoldsCreatePathParams
	QueryParams CloudresourcemanagerTagValuesTagHoldsCreateQueryParams
	Request     *shared.TagHold `request:"mediaType=application/json"`
	Security    CloudresourcemanagerTagValuesTagHoldsCreateSecurity
}

type CloudresourcemanagerTagValuesTagHoldsCreateResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
