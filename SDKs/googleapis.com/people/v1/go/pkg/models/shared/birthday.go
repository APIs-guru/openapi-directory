package shared

// Birthday
// A person's birthday. At least one of the `date` and `text` fields are specified. The `date` and `text` fields typically represent the same date, but are not guaranteed to. Clients should always set the `date` field when mutating birthdays.
type Birthday struct {
	Date     *Date          `json:"date,omitempty"`
	Metadata *FieldMetadata `json:"metadata,omitempty"`
	Text     *string        `json:"text,omitempty"`
}

// BirthdayInput
// A person's birthday. At least one of the `date` and `text` fields are specified. The `date` and `text` fields typically represent the same date, but are not guaranteed to. Clients should always set the `date` field when mutating birthdays.
type BirthdayInput struct {
	Date     *Date               `json:"date,omitempty"`
	Metadata *FieldMetadataInput `json:"metadata,omitempty"`
	Text     *string             `json:"text,omitempty"`
}
