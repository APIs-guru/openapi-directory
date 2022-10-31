package shared



type ElectionOfficial struct {
    EmailAddress *string `json:"emailAddress,omitempty"`
    FaxNumber *string `json:"faxNumber,omitempty"`
    Name *string `json:"name,omitempty"`
    OfficePhoneNumber *string `json:"officePhoneNumber,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

