package operations

import (
	"openapi/pkg/models/shared"
)

type ChatSpacesWebhooksPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type ChatSpacesWebhooksMessageReplyOptionEnum string

const (
	ChatSpacesWebhooksMessageReplyOptionEnumMessageReplyOptionUnspecified   ChatSpacesWebhooksMessageReplyOptionEnum = "MESSAGE_REPLY_OPTION_UNSPECIFIED"
	ChatSpacesWebhooksMessageReplyOptionEnumReplyMessageFallbackToNewThread ChatSpacesWebhooksMessageReplyOptionEnum = "REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD"
	ChatSpacesWebhooksMessageReplyOptionEnumReplyMessageOrFail              ChatSpacesWebhooksMessageReplyOptionEnum = "REPLY_MESSAGE_OR_FAIL"
)

type ChatSpacesWebhooksQueryParams struct {
	DollarXgafv        *shared.XgafvEnum                         `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken        *string                                   `queryParam:"style=form,explode=true,name=access_token"`
	Alt                *shared.AltEnum                           `queryParam:"style=form,explode=true,name=alt"`
	Callback           *string                                   `queryParam:"style=form,explode=true,name=callback"`
	Fields             *string                                   `queryParam:"style=form,explode=true,name=fields"`
	Key                *string                                   `queryParam:"style=form,explode=true,name=key"`
	MessageID          *string                                   `queryParam:"style=form,explode=true,name=messageId"`
	MessageReplyOption *ChatSpacesWebhooksMessageReplyOptionEnum `queryParam:"style=form,explode=true,name=messageReplyOption"`
	OauthToken         *string                                   `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint        *bool                                     `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser          *string                                   `queryParam:"style=form,explode=true,name=quotaUser"`
	RequestID          *string                                   `queryParam:"style=form,explode=true,name=requestId"`
	ThreadKey          *string                                   `queryParam:"style=form,explode=true,name=threadKey"`
	UploadType         *string                                   `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol     *string                                   `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ChatSpacesWebhooksRequest struct {
	PathParams  ChatSpacesWebhooksPathParams
	QueryParams ChatSpacesWebhooksQueryParams
	Request     *shared.MessageInput `request:"mediaType=application/json"`
}

type ChatSpacesWebhooksResponse struct {
	ContentType string
	Message     *shared.Message
	StatusCode  int64
}
