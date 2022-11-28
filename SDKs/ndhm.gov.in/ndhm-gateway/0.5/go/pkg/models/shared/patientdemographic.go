package shared

// PatientDemographic
// Demographic details are only required for demographic auth at this point. Demographic details must be same as registered
type PatientDemographic struct {
	DateOfBirth string                 `json:"dateOfBirth"`
	Gender      PatientGenderEnum      `json:"gender"`
	Identifier  *AuthConfirmIdentifier `json:"identifier,omitempty"`
	Name        string                 `json:"name"`
}
