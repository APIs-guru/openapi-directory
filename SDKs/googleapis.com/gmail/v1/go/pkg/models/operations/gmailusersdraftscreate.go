package operations

import (
	"openapi/pkg/models/shared"
)

type GmailUsersDraftsCreatePathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type GmailUsersDraftsCreateQueryParams struct {
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

type GmailUsersDraftsCreateRequests struct {
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

type GmailUsersDraftsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersDraftsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersDraftsCreateSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersDraftsCreateSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersDraftsCreateSecurity struct {
	Option1 *GmailUsersDraftsCreateSecurityOption1 `security:"option"`
	Option2 *GmailUsersDraftsCreateSecurityOption2 `security:"option"`
	Option3 *GmailUsersDraftsCreateSecurityOption3 `security:"option"`
	Option4 *GmailUsersDraftsCreateSecurityOption4 `security:"option"`
}

type GmailUsersDraftsCreateRequest struct {
	PathParams  GmailUsersDraftsCreatePathParams
	QueryParams GmailUsersDraftsCreateQueryParams
	Request     *GmailUsersDraftsCreateRequests
	Security    GmailUsersDraftsCreateSecurity
}

type GmailUsersDraftsCreateResponse struct {
	ContentType string
	Draft       *shared.Draft
	StatusCode  int64
}
