package operations

import (
	"openapi/pkg/models/shared"
)

type RealtimebiddingBiddersPublisherConnectionsBatchApprovePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type RealtimebiddingBiddersPublisherConnectionsBatchApproveQueryParams struct {
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

type RealtimebiddingBiddersPublisherConnectionsBatchApproveSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type RealtimebiddingBiddersPublisherConnectionsBatchApproveRequest struct {
	PathParams  RealtimebiddingBiddersPublisherConnectionsBatchApprovePathParams
	QueryParams RealtimebiddingBiddersPublisherConnectionsBatchApproveQueryParams
	Request     *shared.BatchApprovePublisherConnectionsRequest `request:"mediaType=application/json"`
	Security    RealtimebiddingBiddersPublisherConnectionsBatchApproveSecurity
}

type RealtimebiddingBiddersPublisherConnectionsBatchApproveResponse struct {
	BatchApprovePublisherConnectionsResponse *shared.BatchApprovePublisherConnectionsResponse
	ContentType                              string
	StatusCode                               int64
}
