package operations

type MemberJoiningRulesDestroyPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type MemberJoiningRulesDestroyRequest struct {
	PathParams MemberJoiningRulesDestroyPathParams
}

type MemberJoiningRulesDestroy400ApplicationJSONTypeEnum string

const (
	MemberJoiningRulesDestroy400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2UnableToFulfillHTML MemberJoiningRulesDestroy400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/unable-to-fulfill.html"
)

type MemberJoiningRulesDestroy400ApplicationJSON struct {
	Detail   *string                                             `json:"detail,omitempty"`
	Instance *string                                             `json:"instance,omitempty"`
	Status   *interface{}                                        `json:"status,omitempty"`
	Title    *interface{}                                        `json:"title,omitempty"`
	Type     MemberJoiningRulesDestroy400ApplicationJSONTypeEnum `json:"type"`
}

type MemberJoiningRulesDestroy401ApplicationJSONTypeEnum string

const (
	MemberJoiningRulesDestroy401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML MemberJoiningRulesDestroy401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	MemberJoiningRulesDestroy401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    MemberJoiningRulesDestroy401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type MemberJoiningRulesDestroy401ApplicationJSON struct {
	Detail   *string                                             `json:"detail,omitempty"`
	Instance *string                                             `json:"instance,omitempty"`
	Status   *interface{}                                        `json:"status,omitempty"`
	Title    *interface{}                                        `json:"title,omitempty"`
	Type     MemberJoiningRulesDestroy401ApplicationJSONTypeEnum `json:"type"`
}

type MemberJoiningRulesDestroy403ApplicationJSONTypeEnum string

const (
	MemberJoiningRulesDestroy403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML MemberJoiningRulesDestroy403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type MemberJoiningRulesDestroy403ApplicationJSON struct {
	Detail   *string                                             `json:"detail,omitempty"`
	Instance *string                                             `json:"instance,omitempty"`
	Status   *interface{}                                        `json:"status,omitempty"`
	Title    *interface{}                                        `json:"title,omitempty"`
	Type     MemberJoiningRulesDestroy403ApplicationJSONTypeEnum `json:"type"`
}

type MemberJoiningRulesDestroy404ApplicationJSONTypeEnum string

const (
	MemberJoiningRulesDestroy404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML MemberJoiningRulesDestroy404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type MemberJoiningRulesDestroy404ApplicationJSON struct {
	Detail   *string                                             `json:"detail,omitempty"`
	Instance *string                                             `json:"instance,omitempty"`
	Status   *interface{}                                        `json:"status,omitempty"`
	Title    *interface{}                                        `json:"title,omitempty"`
	Type     MemberJoiningRulesDestroy404ApplicationJSONTypeEnum `json:"type"`
}

type MemberJoiningRulesDestroyResponse struct {
	ContentType                                       string
	MemberJoiningRule                                 *interface{}
	StatusCode                                        int64
	MemberJoiningRulesDestroy400ApplicationJSONObject *MemberJoiningRulesDestroy400ApplicationJSON
	MemberJoiningRulesDestroy401ApplicationJSONObject *MemberJoiningRulesDestroy401ApplicationJSON
	MemberJoiningRulesDestroy403ApplicationJSONObject *MemberJoiningRulesDestroy403ApplicationJSON
	MemberJoiningRulesDestroy404ApplicationJSONObject *MemberJoiningRulesDestroy404ApplicationJSON
}
