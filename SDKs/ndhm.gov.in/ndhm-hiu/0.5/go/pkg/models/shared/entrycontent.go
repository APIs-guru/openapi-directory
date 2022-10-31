package shared




type EntryContentMediaEnum string

const (
    EntryContentMediaEnumApplicationFhirPlusJSON EntryContentMediaEnum = "application/fhir+json"
)


type EntryContent struct {
    CareContextReference string `json:"careContextReference"`
    Checksum string `json:"checksum"`
    Content string `json:"content"`
    Media EntryContentMediaEnum `json:"media"`
    
}

