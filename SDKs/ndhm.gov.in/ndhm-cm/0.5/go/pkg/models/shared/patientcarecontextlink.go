package shared



type PatientCareContextLinkPatient struct {
    CareContexts []CareContextRepresentation `json:"careContexts"`
    Display string `json:"display"`
    ReferenceNumber string `json:"referenceNumber"`
    
}

type PatientCareContextLink struct {
    AccessToken string `json:"accessToken"`
    Patient PatientCareContextLinkPatient `json:"patient"`
    
}

