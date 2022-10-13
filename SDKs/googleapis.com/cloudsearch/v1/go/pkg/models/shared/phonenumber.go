package shared

type PhoneNumberTypeEnum string

const (
	PhoneNumberTypeEnumOther  PhoneNumberTypeEnum = "OTHER"
	PhoneNumberTypeEnumMobile PhoneNumberTypeEnum = "MOBILE"
	PhoneNumberTypeEnumOffice PhoneNumberTypeEnum = "OFFICE"
)

type PhoneNumber struct {
	PhoneNumber *string              `json:"phoneNumber"`
	Type        *PhoneNumberTypeEnum `json:"type"`
}
