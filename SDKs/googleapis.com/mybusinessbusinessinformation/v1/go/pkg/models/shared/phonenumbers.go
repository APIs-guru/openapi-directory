package shared



type PhoneNumbers struct {
    AdditionalPhones []string `json:"additionalPhones,omitempty"`
    PrimaryPhone *string `json:"primaryPhone,omitempty"`
    
}

