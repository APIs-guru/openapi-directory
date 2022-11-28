package shared

type XSSAttackVectorEnum string

const (
	XSSAttackVectorEnumAttackVectorUnspecified XSSAttackVectorEnum = "ATTACK_VECTOR_UNSPECIFIED"
	XSSAttackVectorEnumLocalStorage            XSSAttackVectorEnum = "LOCAL_STORAGE"
	XSSAttackVectorEnumSessionStorage          XSSAttackVectorEnum = "SESSION_STORAGE"
	XSSAttackVectorEnumWindowName              XSSAttackVectorEnum = "WINDOW_NAME"
	XSSAttackVectorEnumReferrer                XSSAttackVectorEnum = "REFERRER"
	XSSAttackVectorEnumFormInput               XSSAttackVectorEnum = "FORM_INPUT"
	XSSAttackVectorEnumCookie                  XSSAttackVectorEnum = "COOKIE"
	XSSAttackVectorEnumPostMessage             XSSAttackVectorEnum = "POST_MESSAGE"
	XSSAttackVectorEnumGetParameters           XSSAttackVectorEnum = "GET_PARAMETERS"
	XSSAttackVectorEnumURLFragment             XSSAttackVectorEnum = "URL_FRAGMENT"
	XSSAttackVectorEnumHTMLComment             XSSAttackVectorEnum = "HTML_COMMENT"
	XSSAttackVectorEnumPostParameters          XSSAttackVectorEnum = "POST_PARAMETERS"
	XSSAttackVectorEnumProtocol                XSSAttackVectorEnum = "PROTOCOL"
	XSSAttackVectorEnumStoredXSS               XSSAttackVectorEnum = "STORED_XSS"
	XSSAttackVectorEnumSameOrigin              XSSAttackVectorEnum = "SAME_ORIGIN"
	XSSAttackVectorEnumUserControllableURL     XSSAttackVectorEnum = "USER_CONTROLLABLE_URL"
)

// XSS
// Information reported for an XSS.
type XSS struct {
	AttackVector        *XSSAttackVectorEnum `json:"attackVector,omitempty"`
	ErrorMessage        *string              `json:"errorMessage,omitempty"`
	StackTraces         []string             `json:"stackTraces,omitempty"`
	StoredXSSSeedingURL *string              `json:"storedXssSeedingUrl,omitempty"`
}
