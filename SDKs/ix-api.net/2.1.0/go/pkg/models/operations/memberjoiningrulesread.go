package operations

type MemberJoiningRulesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type MemberJoiningRulesReadRequest struct {
	PathParams MemberJoiningRulesReadPathParams
}

type MemberJoiningRulesRead401ApplicationJSONTypeEnum string

const (
	MemberJoiningRulesRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML MemberJoiningRulesRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	MemberJoiningRulesRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    MemberJoiningRulesRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type MemberJoiningRulesRead401ApplicationJSON struct {
	Detail   *string                                          `json:"detail"`
	Instance *string                                          `json:"instance"`
	Status   *interface{}                                     `json:"status"`
	Title    *interface{}                                     `json:"title"`
	Type     MemberJoiningRulesRead401ApplicationJSONTypeEnum `json:"type"`
}

type MemberJoiningRulesRead403ApplicationJSONTypeEnum string

const (
	MemberJoiningRulesRead403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML MemberJoiningRulesRead403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type MemberJoiningRulesRead403ApplicationJSON struct {
	Detail   *string                                          `json:"detail"`
	Instance *string                                          `json:"instance"`
	Status   *interface{}                                     `json:"status"`
	Title    *interface{}                                     `json:"title"`
	Type     MemberJoiningRulesRead403ApplicationJSONTypeEnum `json:"type"`
}

type MemberJoiningRulesRead404ApplicationJSONTypeEnum string

const (
	MemberJoiningRulesRead404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML MemberJoiningRulesRead404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type MemberJoiningRulesRead404ApplicationJSON struct {
	Detail   *string                                          `json:"detail"`
	Instance *string                                          `json:"instance"`
	Status   *interface{}                                     `json:"status"`
	Title    *interface{}                                     `json:"title"`
	Type     MemberJoiningRulesRead404ApplicationJSONTypeEnum `json:"type"`
}

type MemberJoiningRulesReadResponse struct {
	ContentType                                    string
	MemberJoiningRule                              *interface{}
	StatusCode                                     int64
	MemberJoiningRulesRead401ApplicationJSONObject *MemberJoiningRulesRead401ApplicationJSON
	MemberJoiningRulesRead403ApplicationJSONObject *MemberJoiningRulesRead403ApplicationJSON
	MemberJoiningRulesRead404ApplicationJSONObject *MemberJoiningRulesRead404ApplicationJSON
}
