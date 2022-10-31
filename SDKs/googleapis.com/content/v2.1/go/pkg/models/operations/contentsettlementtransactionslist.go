package operations

import (
	"openapi/pkg/models/shared"
)

type ContentSettlementtransactionsListPathParams struct {
	MerchantID   string `pathParam:"style=simple,explode=false,name=merchantId"`
	SettlementID string `pathParam:"style=simple,explode=false,name=settlementId"`
}

type ContentSettlementtransactionsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	MaxResults     *int64            `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	TransactionIds []string          `queryParam:"style=form,explode=true,name=transactionIds"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ContentSettlementtransactionsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ContentSettlementtransactionsListRequest struct {
	PathParams  ContentSettlementtransactionsListPathParams
	QueryParams ContentSettlementtransactionsListQueryParams
	Security    ContentSettlementtransactionsListSecurity
}

type ContentSettlementtransactionsListResponse struct {
	ContentType                        string
	SettlementtransactionsListResponse *shared.SettlementtransactionsListResponse
	StatusCode                         int64
}
