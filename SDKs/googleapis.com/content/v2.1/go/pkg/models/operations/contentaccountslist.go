package operations

import (
	"openapi/pkg/models/shared"
)

type ContentAccountsListPathParams struct {
	MerchantID string `pathParam:"style=simple,explode=false,name=merchantId"`
}

type ContentAccountsListViewEnum string

const (
	ContentAccountsListViewEnumMerchant ContentAccountsListViewEnum = "MERCHANT"
	ContentAccountsListViewEnumCSS      ContentAccountsListViewEnum = "CSS"
)

type ContentAccountsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum            `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                      `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum              `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                      `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                      `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                      `queryParam:"style=form,explode=true,name=key"`
	Label          *string                      `queryParam:"style=form,explode=true,name=label"`
	MaxResults     *int64                       `queryParam:"style=form,explode=true,name=maxResults"`
	Name           *string                      `queryParam:"style=form,explode=true,name=name"`
	OauthToken     *string                      `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken      *string                      `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                        `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                      `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                      `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                      `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *ContentAccountsListViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type ContentAccountsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ContentAccountsListRequest struct {
	PathParams  ContentAccountsListPathParams
	QueryParams ContentAccountsListQueryParams
	Security    ContentAccountsListSecurity
}

type ContentAccountsListResponse struct {
	AccountsListResponse *shared.AccountsListResponse
	ContentType          string
	StatusCode           int64
}
