package operations

import (
	"openapi/pkg/models/shared"
)

type PaymentsresellersubscriptionPartnersProductsListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type PaymentsresellersubscriptionPartnersProductsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Filter         *string           `queryParam:"style=form,explode=true,name=filter"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type PaymentsresellersubscriptionPartnersProductsListRequest struct {
	PathParams  PaymentsresellersubscriptionPartnersProductsListPathParams
	QueryParams PaymentsresellersubscriptionPartnersProductsListQueryParams
}

type PaymentsresellersubscriptionPartnersProductsListResponse struct {
	ContentType                                                   string
	GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse *shared.GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse
	StatusCode                                                    int64
}
