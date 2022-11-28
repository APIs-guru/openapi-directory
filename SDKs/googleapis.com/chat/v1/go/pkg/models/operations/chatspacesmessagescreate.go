package operations

import (
	"openapi/pkg/models/shared"
)

type ChatSpacesMessagesCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type ChatSpacesMessagesCreateMessageReplyOptionEnum string

const (
	ChatSpacesMessagesCreateMessageReplyOptionEnumMessageReplyOptionUnspecified   ChatSpacesMessagesCreateMessageReplyOptionEnum = "MESSAGE_REPLY_OPTION_UNSPECIFIED"
	ChatSpacesMessagesCreateMessageReplyOptionEnumReplyMessageFallbackToNewThread ChatSpacesMessagesCreateMessageReplyOptionEnum = "REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD"
	ChatSpacesMessagesCreateMessageReplyOptionEnumReplyMessageOrFail              ChatSpacesMessagesCreateMessageReplyOptionEnum = "REPLY_MESSAGE_OR_FAIL"
)

type ChatSpacesMessagesCreateQueryParams struct {
	DollarXgafv        *shared.XgafvEnum                               `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken        *string                                         `queryParam:"style=form,explode=true,name=access_token"`
	Alt                *shared.AltEnum                                 `queryParam:"style=form,explode=true,name=alt"`
	Callback           *string                                         `queryParam:"style=form,explode=true,name=callback"`
	Fields             *string                                         `queryParam:"style=form,explode=true,name=fields"`
	Key                *string                                         `queryParam:"style=form,explode=true,name=key"`
	MessageID          *string                                         `queryParam:"style=form,explode=true,name=messageId"`
	MessageReplyOption *ChatSpacesMessagesCreateMessageReplyOptionEnum `queryParam:"style=form,explode=true,name=messageReplyOption"`
	OauthToken         *string                                         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint        *bool                                           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser          *string                                         `queryParam:"style=form,explode=true,name=quotaUser"`
	RequestID          *string                                         `queryParam:"style=form,explode=true,name=requestId"`
	ThreadKey          *string                                         `queryParam:"style=form,explode=true,name=threadKey"`
	UploadType         *string                                         `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol     *string                                         `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ChatSpacesMessagesCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ChatSpacesMessagesCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ChatSpacesMessagesCreateSecurity struct {
	Option1 *ChatSpacesMessagesCreateSecurityOption1 `security:"option"`
	Option2 *ChatSpacesMessagesCreateSecurityOption2 `security:"option"`
}

type ChatSpacesMessagesCreateRequest struct {
	PathParams  ChatSpacesMessagesCreatePathParams
	QueryParams ChatSpacesMessagesCreateQueryParams
	Request     *shared.MessageInput `request:"mediaType=application/json"`
	Security    ChatSpacesMessagesCreateSecurity
}

type ChatSpacesMessagesCreateResponse struct {
	ContentType string
	Message     *shared.Message
	StatusCode  int64
}
