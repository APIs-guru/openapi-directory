package shared

type PatientDemographic struct {
	DateOfBirth string                 `json:"dateOfBirth"`
	Gender      PatientGenderEnum      `json:"gender"`
	Identifier  *AuthConfirmIdentifier `json:"identifier"`
	Name        string                 `json:"name"`
}
