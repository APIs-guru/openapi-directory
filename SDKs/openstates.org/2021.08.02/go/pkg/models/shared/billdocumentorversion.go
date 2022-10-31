package shared



type BillDocumentOrVersion struct {
    Date string `json:"date"`
    Links []BillDocumentLink `json:"links"`
    Note string `json:"note"`
    
}

