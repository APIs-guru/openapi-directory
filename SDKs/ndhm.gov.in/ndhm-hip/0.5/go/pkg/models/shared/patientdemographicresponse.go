package shared

type PatientDemographicResponse struct {
	Address     *PatientAddress   `json:"address,omitempty"`
	Gender      PatientGenderEnum `json:"gender"`
	ID          string            `json:"id"`
	Identifiers []Identifier      `json:"identifiers,omitempty"`
	Name        string            `json:"name"`
	YearOfBirth int64             `json:"yearOfBirth"`
}
