package operations

import (
	"openapi/pkg/models/shared"
)

type MybusinessbusinessinformationAccountsLocationsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type MybusinessbusinessinformationAccountsLocationsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	RequestID      *string           `queryParam:"style=form,explode=true,name=requestId"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
	ValidateOnly   *bool             `queryParam:"style=form,explode=true,name=validateOnly"`
}

type MybusinessbusinessinformationAccountsLocationsCreateRequest struct {
	PathParams  MybusinessbusinessinformationAccountsLocationsCreatePathParams
	QueryParams MybusinessbusinessinformationAccountsLocationsCreateQueryParams
	Request     *shared.Location `request:"mediaType=application/json"`
}

type MybusinessbusinessinformationAccountsLocationsCreateResponse struct {
	ContentType string
	Location    *shared.Location
	StatusCode  int64
}
