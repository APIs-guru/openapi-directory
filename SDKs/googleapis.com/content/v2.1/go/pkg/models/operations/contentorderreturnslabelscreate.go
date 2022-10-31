package operations

import (
	"openapi/pkg/models/shared"
)

type ContentOrderreturnsLabelsCreatePathParams struct {
	MerchantID string `pathParam:"style=simple,explode=false,name=merchantId"`
	ReturnID   string `pathParam:"style=simple,explode=false,name=returnId"`
}

type ContentOrderreturnsLabelsCreateQueryParams struct {
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

type ContentOrderreturnsLabelsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ContentOrderreturnsLabelsCreateRequest struct {
	PathParams  ContentOrderreturnsLabelsCreatePathParams
	QueryParams ContentOrderreturnsLabelsCreateQueryParams
	Request     *shared.ReturnShippingLabel `request:"mediaType=application/json"`
	Security    ContentOrderreturnsLabelsCreateSecurity
}

type ContentOrderreturnsLabelsCreateResponse struct {
	ContentType         string
	ReturnShippingLabel *shared.ReturnShippingLabel
	StatusCode          int64
}
