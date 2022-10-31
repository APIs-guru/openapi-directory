package shared



type AdministrationRegion struct {
    ElectionAdministrationBody *AdministrativeBody `json:"electionAdministrationBody,omitempty"`
    LocalJurisdiction *AdministrationRegion `json:"local_jurisdiction,omitempty"`
    Name *string `json:"name,omitempty"`
    Sources []Source `json:"sources,omitempty"`
    
}

