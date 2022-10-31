package shared



type PatientDemographic struct {
    DateOfBirth string `json:"dateOfBirth"`
    Gender PatientGenderEnum `json:"gender"`
    Identifier *AuthConfirmIdentifier `json:"identifier,omitempty"`
    Name string `json:"name"`
    
}

