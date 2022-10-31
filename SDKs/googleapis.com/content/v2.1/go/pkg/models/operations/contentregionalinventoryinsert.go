package operations

import (
	"openapi/pkg/models/shared"
)

type ContentRegionalinventoryInsertPathParams struct {
	MerchantID string `pathParam:"style=simple,explode=false,name=merchantId"`
	ProductID  string `pathParam:"style=simple,explode=false,name=productId"`
}

type ContentRegionalinventoryInsertQueryParams struct {
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

type ContentRegionalinventoryInsertSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ContentRegionalinventoryInsertRequest struct {
	PathParams  ContentRegionalinventoryInsertPathParams
	QueryParams ContentRegionalinventoryInsertQueryParams
	Request     *shared.RegionalInventory `request:"mediaType=application/json"`
	Security    ContentRegionalinventoryInsertSecurity
}

type ContentRegionalinventoryInsertResponse struct {
	ContentType       string
	RegionalInventory *shared.RegionalInventory
	StatusCode        int64
}
