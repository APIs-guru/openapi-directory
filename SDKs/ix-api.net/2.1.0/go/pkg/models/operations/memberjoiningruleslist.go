package operations

type MemberJoiningRulesListQueryParams struct {
	ID             []string `queryParam:"style=form,explode=false,name=id"`
	NetworkService *string  `queryParam:"style=form,explode=true,name=network_service"`
}

type MemberJoiningRulesListRequest struct {
	QueryParams MemberJoiningRulesListQueryParams
}

type MemberJoiningRulesList400ApplicationJSONTypeEnum string

const (
	MemberJoiningRulesList400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML MemberJoiningRulesList400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type MemberJoiningRulesList400ApplicationJSON struct {
	Detail   *string                                          `json:"detail,omitempty"`
	Instance *string                                          `json:"instance,omitempty"`
	Status   *interface{}                                     `json:"status,omitempty"`
	Title    *interface{}                                     `json:"title,omitempty"`
	Type     MemberJoiningRulesList400ApplicationJSONTypeEnum `json:"type"`
}

type MemberJoiningRulesList401ApplicationJSONTypeEnum string

const (
	MemberJoiningRulesList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML MemberJoiningRulesList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	MemberJoiningRulesList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    MemberJoiningRulesList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type MemberJoiningRulesList401ApplicationJSON struct {
	Detail   *string                                          `json:"detail,omitempty"`
	Instance *string                                          `json:"instance,omitempty"`
	Status   *interface{}                                     `json:"status,omitempty"`
	Title    *interface{}                                     `json:"title,omitempty"`
	Type     MemberJoiningRulesList401ApplicationJSONTypeEnum `json:"type"`
}

type MemberJoiningRulesList403ApplicationJSONTypeEnum string

const (
	MemberJoiningRulesList403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML MemberJoiningRulesList403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type MemberJoiningRulesList403ApplicationJSON struct {
	Detail   *string                                          `json:"detail,omitempty"`
	Instance *string                                          `json:"instance,omitempty"`
	Status   *interface{}                                     `json:"status,omitempty"`
	Title    *interface{}                                     `json:"title,omitempty"`
	Type     MemberJoiningRulesList403ApplicationJSONTypeEnum `json:"type"`
}

type MemberJoiningRulesListResponse struct {
	ContentType                                    string
	MemberJoiningRules                             []interface{}
	StatusCode                                     int64
	MemberJoiningRulesList400ApplicationJSONObject *MemberJoiningRulesList400ApplicationJSON
	MemberJoiningRulesList401ApplicationJSONObject *MemberJoiningRulesList401ApplicationJSON
	MemberJoiningRulesList403ApplicationJSONObject *MemberJoiningRulesList403ApplicationJSON
}
