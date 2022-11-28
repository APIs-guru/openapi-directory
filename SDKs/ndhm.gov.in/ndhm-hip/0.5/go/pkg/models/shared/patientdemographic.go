package shared

// PatientDemographic
// demographic details are only required for demographic auth at this point, in which case identifier.Type must be AADHAAR.
type PatientDemographic struct {
	DateOfBirth string                 `json:"dateOfBirth"`
	Gender      PatientGenderEnum      `json:"gender"`
	Identifier  *AuthConfirmIdentifier `json:"identifier,omitempty"`
	Name        string                 `json:"name"`
}
