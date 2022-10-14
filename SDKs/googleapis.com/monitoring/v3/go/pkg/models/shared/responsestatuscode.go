package shared

type ResponseStatusCodeStatusClassEnum string

const (
	ResponseStatusCodeStatusClassEnumStatusClassUnspecified ResponseStatusCodeStatusClassEnum = "STATUS_CLASS_UNSPECIFIED"
	ResponseStatusCodeStatusClassEnumStatusClass1Xx         ResponseStatusCodeStatusClassEnum = "STATUS_CLASS_1XX"
	ResponseStatusCodeStatusClassEnumStatusClass2Xx         ResponseStatusCodeStatusClassEnum = "STATUS_CLASS_2XX"
	ResponseStatusCodeStatusClassEnumStatusClass3Xx         ResponseStatusCodeStatusClassEnum = "STATUS_CLASS_3XX"
	ResponseStatusCodeStatusClassEnumStatusClass4Xx         ResponseStatusCodeStatusClassEnum = "STATUS_CLASS_4XX"
	ResponseStatusCodeStatusClassEnumStatusClass5Xx         ResponseStatusCodeStatusClassEnum = "STATUS_CLASS_5XX"
	ResponseStatusCodeStatusClassEnumStatusClassAny         ResponseStatusCodeStatusClassEnum = "STATUS_CLASS_ANY"
)

type ResponseStatusCode struct {
	StatusClass *ResponseStatusCodeStatusClassEnum `json:"statusClass,omitempty"`
	StatusValue *int32                             `json:"statusValue,omitempty"`
}
