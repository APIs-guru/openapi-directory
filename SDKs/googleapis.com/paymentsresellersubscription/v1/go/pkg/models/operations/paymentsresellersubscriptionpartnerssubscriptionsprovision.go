package operations

import (
	"openapi/pkg/models/shared"
)

type PaymentsresellersubscriptionPartnersSubscriptionsProvisionPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type PaymentsresellersubscriptionPartnersSubscriptionsProvisionQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	SubscriptionID *string           `queryParam:"style=form,explode=true,name=subscriptionId"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type PaymentsresellersubscriptionPartnersSubscriptionsProvisionRequest struct {
	PathParams  PaymentsresellersubscriptionPartnersSubscriptionsProvisionPathParams
	QueryParams PaymentsresellersubscriptionPartnersSubscriptionsProvisionQueryParams
	Request     *shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput `request:"mediaType=application/json"`
}

type PaymentsresellersubscriptionPartnersSubscriptionsProvisionResponse struct {
	ContentType                                           string
	GoogleCloudPaymentsResellerSubscriptionV1Subscription *shared.GoogleCloudPaymentsResellerSubscriptionV1Subscription
	StatusCode                                            int64
}
