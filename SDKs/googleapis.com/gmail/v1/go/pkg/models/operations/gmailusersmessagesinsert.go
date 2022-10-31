package operations

import (
	"openapi/pkg/models/shared"
)

type GmailUsersMessagesInsertPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type GmailUsersMessagesInsertInternalDateSourceEnum string

const (
	GmailUsersMessagesInsertInternalDateSourceEnumReceivedTime GmailUsersMessagesInsertInternalDateSourceEnum = "receivedTime"
	GmailUsersMessagesInsertInternalDateSourceEnumDateHeader   GmailUsersMessagesInsertInternalDateSourceEnum = "dateHeader"
)

type GmailUsersMessagesInsertQueryParams struct {
	DollarXgafv        *shared.XgafvEnum                               `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken        *string                                         `queryParam:"style=form,explode=true,name=access_token"`
	Alt                *shared.AltEnum                                 `queryParam:"style=form,explode=true,name=alt"`
	Callback           *string                                         `queryParam:"style=form,explode=true,name=callback"`
	Deleted            *bool                                           `queryParam:"style=form,explode=true,name=deleted"`
	Fields             *string                                         `queryParam:"style=form,explode=true,name=fields"`
	InternalDateSource *GmailUsersMessagesInsertInternalDateSourceEnum `queryParam:"style=form,explode=true,name=internalDateSource"`
	Key                *string                                         `queryParam:"style=form,explode=true,name=key"`
	OauthToken         *string                                         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint        *bool                                           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser          *string                                         `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType         *string                                         `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol     *string                                         `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type GmailUsersMessagesInsertRequests struct {
	MessageCpim                          []byte `request:"mediaType=message/cpim"`
	MessageDeliveryStatus                []byte `request:"mediaType=message/delivery-status"`
	MessageDispositionNotification       []byte `request:"mediaType=message/disposition-notification"`
	MessageExternalBody                  []byte `request:"mediaType=message/external-body"`
	MessageFeedbackReport                []byte `request:"mediaType=message/feedback-report"`
	MessageGlobal                        []byte `request:"mediaType=message/global"`
	MessageGlobalDeliveryStatus          []byte `request:"mediaType=message/global-delivery-status"`
	MessageGlobalDispositionNotification []byte `request:"mediaType=message/global-disposition-notification"`
	MessageGlobalHeaders                 []byte `request:"mediaType=message/global-headers"`
	MessageHTTP                          []byte `request:"mediaType=message/http"`
	MessageImdnPlusXML                   []byte `request:"mediaType=message/imdn+xml"`
	MessageNews                          []byte `request:"mediaType=message/news"`
	MessagePartial                       []byte `request:"mediaType=message/partial"`
	MessageRfc822                        []byte `request:"mediaType=message/rfc822"`
	MessageShttp                         []byte `request:"mediaType=message/s-http"`
	MessageSip                           []byte `request:"mediaType=message/sip"`
	MessageSipfrag                       []byte `request:"mediaType=message/sipfrag"`
	MessageTrackingStatus                []byte `request:"mediaType=message/tracking-status"`
	MessageVndSiSimp                     []byte `request:"mediaType=message/vnd.si.simp"`
	MessageVndWfaWsc                     []byte `request:"mediaType=message/vnd.wfa.wsc"`
}

type GmailUsersMessagesInsertSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersMessagesInsertSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersMessagesInsertSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersMessagesInsertSecurity struct {
	Option1 *GmailUsersMessagesInsertSecurityOption1 `security:"option"`
	Option2 *GmailUsersMessagesInsertSecurityOption2 `security:"option"`
	Option3 *GmailUsersMessagesInsertSecurityOption3 `security:"option"`
}

type GmailUsersMessagesInsertRequest struct {
	PathParams  GmailUsersMessagesInsertPathParams
	QueryParams GmailUsersMessagesInsertQueryParams
	Request     *GmailUsersMessagesInsertRequests
	Security    GmailUsersMessagesInsertSecurity
}

type GmailUsersMessagesInsertResponse struct {
	ContentType string
	Message     *shared.Message
	StatusCode  int64
}
