package shared

type PhoneNumbers struct {
	AdditionalPhones []string `json:"additionalPhones"`
	PrimaryPhone     *string  `json:"primaryPhone"`
}
