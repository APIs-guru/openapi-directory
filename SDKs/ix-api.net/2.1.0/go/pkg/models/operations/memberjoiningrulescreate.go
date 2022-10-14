package operations

type MemberJoiningRulesCreateRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type MemberJoiningRulesCreate400ApplicationJSONTypeEnum string

const (
	MemberJoiningRulesCreate400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML MemberJoiningRulesCreate400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type MemberJoiningRulesCreate400ApplicationJSON struct {
	Detail   *string                                            `json:"detail,omitempty"`
	Instance *string                                            `json:"instance,omitempty"`
	Status   *interface{}                                       `json:"status,omitempty"`
	Title    *interface{}                                       `json:"title,omitempty"`
	Type     MemberJoiningRulesCreate400ApplicationJSONTypeEnum `json:"type"`
}

type MemberJoiningRulesCreate401ApplicationJSONTypeEnum string

const (
	MemberJoiningRulesCreate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML MemberJoiningRulesCreate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	MemberJoiningRulesCreate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    MemberJoiningRulesCreate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type MemberJoiningRulesCreate401ApplicationJSON struct {
	Detail   *string                                            `json:"detail,omitempty"`
	Instance *string                                            `json:"instance,omitempty"`
	Status   *interface{}                                       `json:"status,omitempty"`
	Title    *interface{}                                       `json:"title,omitempty"`
	Type     MemberJoiningRulesCreate401ApplicationJSONTypeEnum `json:"type"`
}

type MemberJoiningRulesCreate403ApplicationJSONTypeEnum string

const (
	MemberJoiningRulesCreate403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML MemberJoiningRulesCreate403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type MemberJoiningRulesCreate403ApplicationJSON struct {
	Detail   *string                                            `json:"detail,omitempty"`
	Instance *string                                            `json:"instance,omitempty"`
	Status   *interface{}                                       `json:"status,omitempty"`
	Title    *interface{}                                       `json:"title,omitempty"`
	Type     MemberJoiningRulesCreate403ApplicationJSONTypeEnum `json:"type"`
}

type MemberJoiningRulesCreateResponse struct {
	ContentType                                      string
	MemberJoiningRule                                *interface{}
	StatusCode                                       int64
	MemberJoiningRulesCreate400ApplicationJSONObject *MemberJoiningRulesCreate400ApplicationJSON
	MemberJoiningRulesCreate401ApplicationJSONObject *MemberJoiningRulesCreate401ApplicationJSON
	MemberJoiningRulesCreate403ApplicationJSONObject *MemberJoiningRulesCreate403ApplicationJSON
}
