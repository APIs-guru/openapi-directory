package operations

import (
	"openapi/pkg/models/shared"
)

type ContentSettlementreportsListPathParams struct {
	MerchantID string `pathParam:"style=simple,explode=false,name=merchantId"`
}

type ContentSettlementreportsListQueryParams struct {
	DollarXgafv       *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken       *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt               *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback          *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields            *string           `queryParam:"style=form,explode=true,name=fields"`
	Key               *string           `queryParam:"style=form,explode=true,name=key"`
	MaxResults        *int64            `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken        *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken         *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint       *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser         *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	TransferEndDate   *string           `queryParam:"style=form,explode=true,name=transferEndDate"`
	TransferStartDate *string           `queryParam:"style=form,explode=true,name=transferStartDate"`
	UploadType        *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol    *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ContentSettlementreportsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ContentSettlementreportsListRequest struct {
	PathParams  ContentSettlementreportsListPathParams
	QueryParams ContentSettlementreportsListQueryParams
	Security    ContentSettlementreportsListSecurity
}

type ContentSettlementreportsListResponse struct {
	ContentType                   string
	SettlementreportsListResponse *shared.SettlementreportsListResponse
	StatusCode                    int64
}
