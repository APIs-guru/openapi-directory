package shared

// PhoneNumbers
// A collection of phone numbers for the business. During updates, both fields must be set. Clients may not update just the primary or additional phone numbers using the update mask. International phone format is preferred, such as "+1 415 555 0132", see more in (https://developers.google.com/style/phone-numbers#international-phone-numbers).
type PhoneNumbers struct {
	AdditionalPhones []string `json:"additionalPhones,omitempty"`
	PrimaryPhone     *string  `json:"primaryPhone,omitempty"`
}
