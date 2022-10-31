package shared



type SiteVerificationWebResourceResourceSite struct {
    Identifier *string `json:"identifier,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type SiteVerificationWebResourceResource struct {
    ID *string `json:"id,omitempty"`
    Owners []string `json:"owners,omitempty"`
    Site *SiteVerificationWebResourceResourceSite `json:"site,omitempty"`
    
}

