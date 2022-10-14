package operations

type MemberJoiningRulesPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type MemberJoiningRulesPartialUpdateRequest struct {
	PathParams MemberJoiningRulesPartialUpdatePathParams
	Request    *interface{} `request:"mediaType=application/merge-patch+json"`
}

type MemberJoiningRulesPartialUpdate400ApplicationJSONTypeEnum string

const (
	MemberJoiningRulesPartialUpdate400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML MemberJoiningRulesPartialUpdate400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type MemberJoiningRulesPartialUpdate400ApplicationJSON struct {
	Detail   *string                                                   `json:"detail,omitempty"`
	Instance *string                                                   `json:"instance,omitempty"`
	Status   *interface{}                                              `json:"status,omitempty"`
	Title    *interface{}                                              `json:"title,omitempty"`
	Type     MemberJoiningRulesPartialUpdate400ApplicationJSONTypeEnum `json:"type"`
}

type MemberJoiningRulesPartialUpdate401ApplicationJSONTypeEnum string

const (
	MemberJoiningRulesPartialUpdate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML MemberJoiningRulesPartialUpdate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	MemberJoiningRulesPartialUpdate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    MemberJoiningRulesPartialUpdate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type MemberJoiningRulesPartialUpdate401ApplicationJSON struct {
	Detail   *string                                                   `json:"detail,omitempty"`
	Instance *string                                                   `json:"instance,omitempty"`
	Status   *interface{}                                              `json:"status,omitempty"`
	Title    *interface{}                                              `json:"title,omitempty"`
	Type     MemberJoiningRulesPartialUpdate401ApplicationJSONTypeEnum `json:"type"`
}

type MemberJoiningRulesPartialUpdate403ApplicationJSONTypeEnum string

const (
	MemberJoiningRulesPartialUpdate403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML MemberJoiningRulesPartialUpdate403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type MemberJoiningRulesPartialUpdate403ApplicationJSON struct {
	Detail   *string                                                   `json:"detail,omitempty"`
	Instance *string                                                   `json:"instance,omitempty"`
	Status   *interface{}                                              `json:"status,omitempty"`
	Title    *interface{}                                              `json:"title,omitempty"`
	Type     MemberJoiningRulesPartialUpdate403ApplicationJSONTypeEnum `json:"type"`
}

type MemberJoiningRulesPartialUpdate404ApplicationJSONTypeEnum string

const (
	MemberJoiningRulesPartialUpdate404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML MemberJoiningRulesPartialUpdate404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type MemberJoiningRulesPartialUpdate404ApplicationJSON struct {
	Detail   *string                                                   `json:"detail,omitempty"`
	Instance *string                                                   `json:"instance,omitempty"`
	Status   *interface{}                                              `json:"status,omitempty"`
	Title    *interface{}                                              `json:"title,omitempty"`
	Type     MemberJoiningRulesPartialUpdate404ApplicationJSONTypeEnum `json:"type"`
}

type MemberJoiningRulesPartialUpdateResponse struct {
	ContentType                                             string
	MemberJoiningRule                                       *interface{}
	StatusCode                                              int64
	MemberJoiningRulesPartialUpdate400ApplicationJSONObject *MemberJoiningRulesPartialUpdate400ApplicationJSON
	MemberJoiningRulesPartialUpdate401ApplicationJSONObject *MemberJoiningRulesPartialUpdate401ApplicationJSON
	MemberJoiningRulesPartialUpdate403ApplicationJSONObject *MemberJoiningRulesPartialUpdate403ApplicationJSON
	MemberJoiningRulesPartialUpdate404ApplicationJSONObject *MemberJoiningRulesPartialUpdate404ApplicationJSON
}
