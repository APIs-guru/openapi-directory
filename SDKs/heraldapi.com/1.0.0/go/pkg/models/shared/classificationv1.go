package shared

// ClassificationV1
// An classification is a set of information for a specific industry, based on NAICs codes.
type ClassificationV1 struct {
	Description                *string `json:"description,omitempty"`
	ID                         *string `json:"id,omitempty"`
	Naics20176Digit            *int64  `json:"naics_2017_6_digit,omitempty"`
	Naics20176DigitDescription *string `json:"naics_2017_6_digit_description,omitempty"`
}
