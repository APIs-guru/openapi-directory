package shared




type EntryLinkMediaEnum string

const (
    EntryLinkMediaEnumApplicationFhirPlusJSON EntryLinkMediaEnum = "application/fhir+json"
)


type EntryLink struct {
    CareContextReference string `json:"careContextReference"`
    Checksum string `json:"checksum"`
    Link string `json:"link"`
    Media EntryLinkMediaEnum `json:"media"`
    
}

