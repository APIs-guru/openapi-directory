package shared

type Feedback struct {
	Material []ExtraMaterial `json:"material"`
	Text     *string         `json:"text"`
}
