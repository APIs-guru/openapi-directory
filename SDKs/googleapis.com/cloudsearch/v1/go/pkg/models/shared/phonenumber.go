package shared

type PhoneNumberTypeEnum string

const (
	PhoneNumberTypeEnumOther  PhoneNumberTypeEnum = "OTHER"
	PhoneNumberTypeEnumMobile PhoneNumberTypeEnum = "MOBILE"
	PhoneNumberTypeEnumOffice PhoneNumberTypeEnum = "OFFICE"
)

type PhoneNumber struct {
	PhoneNumber *string              `json:"phoneNumber,omitempty"`
	Type        *PhoneNumberTypeEnum `json:"type,omitempty"`
}
