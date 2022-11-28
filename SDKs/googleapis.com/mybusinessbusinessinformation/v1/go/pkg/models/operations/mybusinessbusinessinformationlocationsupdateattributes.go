package operations

import (
	"openapi/pkg/models/shared"
)

type MybusinessbusinessinformationLocationsUpdateAttributesPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type MybusinessbusinessinformationLocationsUpdateAttributesQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	AttributeMask  *string           `queryParam:"style=form,explode=true,name=attributeMask"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type MybusinessbusinessinformationLocationsUpdateAttributesRequest struct {
	PathParams  MybusinessbusinessinformationLocationsUpdateAttributesPathParams
	QueryParams MybusinessbusinessinformationLocationsUpdateAttributesQueryParams
	Request     *shared.AttributesInput `request:"mediaType=application/json"`
}

type MybusinessbusinessinformationLocationsUpdateAttributesResponse struct {
	Attributes  *shared.Attributes
	ContentType string
	StatusCode  int64
}
