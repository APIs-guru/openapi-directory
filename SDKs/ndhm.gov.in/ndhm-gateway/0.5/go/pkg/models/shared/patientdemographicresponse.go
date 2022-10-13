package shared

type PatientDemographicResponse struct {
	Address     *PatientAddress   `json:"address"`
	Gender      PatientGenderEnum `json:"gender"`
	ID          string            `json:"id"`
	Identifiers []Identifier      `json:"identifiers"`
	Name        string            `json:"name"`
	YearOfBirth int64             `json:"yearOfBirth"`
}
