package operations

import (
	"openapi/pkg/models/shared"
)

type ChatSpacesMessagesCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type ChatSpacesMessagesCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	MessageID      *string           `queryParam:"style=form,explode=true,name=messageId"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	RequestID      *string           `queryParam:"style=form,explode=true,name=requestId"`
	ThreadKey      *string           `queryParam:"style=form,explode=true,name=threadKey"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ChatSpacesMessagesCreateRequest struct {
	PathParams  ChatSpacesMessagesCreatePathParams
	QueryParams ChatSpacesMessagesCreateQueryParams
	Request     *shared.Message `request:"mediaType=application/json"`
}

type ChatSpacesMessagesCreateResponse struct {
	ContentType string
	Message     *shared.Message
	StatusCode  int64
}
