package operations

import (
	"openapi/pkg/models/shared"
)

type MybusinessaccountmanagementLocationsAdminsPatchPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type MybusinessaccountmanagementLocationsAdminsPatchQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UpdateMask     *string           `queryParam:"style=form,explode=true,name=updateMask"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
	ValidateOnly   *bool             `queryParam:"style=form,explode=true,name=validateOnly"`
}

type MybusinessaccountmanagementLocationsAdminsPatchRequest struct {
	PathParams  MybusinessaccountmanagementLocationsAdminsPatchPathParams
	QueryParams MybusinessaccountmanagementLocationsAdminsPatchQueryParams
	Request     *shared.Admin `request:"mediaType=application/json"`
}

type MybusinessaccountmanagementLocationsAdminsPatchResponse struct {
	Admin       *shared.Admin
	ContentType string
	StatusCode  int64
}
