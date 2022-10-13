package operations

type MemberJoiningRulesUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type MemberJoiningRulesUpdateRequest struct {
	PathParams MemberJoiningRulesUpdatePathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type MemberJoiningRulesUpdate400ApplicationJSONTypeEnum string

const (
	MemberJoiningRulesUpdate400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML MemberJoiningRulesUpdate400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type MemberJoiningRulesUpdate400ApplicationJSON struct {
	Detail   *string                                            `json:"detail"`
	Instance *string                                            `json:"instance"`
	Status   *interface{}                                       `json:"status"`
	Title    *interface{}                                       `json:"title"`
	Type     MemberJoiningRulesUpdate400ApplicationJSONTypeEnum `json:"type"`
}

type MemberJoiningRulesUpdate401ApplicationJSONTypeEnum string

const (
	MemberJoiningRulesUpdate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML MemberJoiningRulesUpdate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	MemberJoiningRulesUpdate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    MemberJoiningRulesUpdate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type MemberJoiningRulesUpdate401ApplicationJSON struct {
	Detail   *string                                            `json:"detail"`
	Instance *string                                            `json:"instance"`
	Status   *interface{}                                       `json:"status"`
	Title    *interface{}                                       `json:"title"`
	Type     MemberJoiningRulesUpdate401ApplicationJSONTypeEnum `json:"type"`
}

type MemberJoiningRulesUpdate403ApplicationJSONTypeEnum string

const (
	MemberJoiningRulesUpdate403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML MemberJoiningRulesUpdate403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type MemberJoiningRulesUpdate403ApplicationJSON struct {
	Detail   *string                                            `json:"detail"`
	Instance *string                                            `json:"instance"`
	Status   *interface{}                                       `json:"status"`
	Title    *interface{}                                       `json:"title"`
	Type     MemberJoiningRulesUpdate403ApplicationJSONTypeEnum `json:"type"`
}

type MemberJoiningRulesUpdate404ApplicationJSONTypeEnum string

const (
	MemberJoiningRulesUpdate404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML MemberJoiningRulesUpdate404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type MemberJoiningRulesUpdate404ApplicationJSON struct {
	Detail   *string                                            `json:"detail"`
	Instance *string                                            `json:"instance"`
	Status   *interface{}                                       `json:"status"`
	Title    *interface{}                                       `json:"title"`
	Type     MemberJoiningRulesUpdate404ApplicationJSONTypeEnum `json:"type"`
}

type MemberJoiningRulesUpdateResponse struct {
	ContentType                                      string
	MemberJoiningRule                                *interface{}
	StatusCode                                       int64
	MemberJoiningRulesUpdate400ApplicationJSONObject *MemberJoiningRulesUpdate400ApplicationJSON
	MemberJoiningRulesUpdate401ApplicationJSONObject *MemberJoiningRulesUpdate401ApplicationJSON
	MemberJoiningRulesUpdate403ApplicationJSONObject *MemberJoiningRulesUpdate403ApplicationJSON
	MemberJoiningRulesUpdate404ApplicationJSONObject *MemberJoiningRulesUpdate404ApplicationJSON
}
