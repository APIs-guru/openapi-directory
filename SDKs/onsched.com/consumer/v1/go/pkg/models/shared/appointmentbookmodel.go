package shared



type AppointmentBookModel struct {
    CustomerMessage *string `json:"customerMessage,omitempty"`
    Email *string `json:"email,omitempty"`
    GroupSize *int32 `json:"groupSize,omitempty"`
    Name *string `json:"name,omitempty"`
    Notes *string `json:"notes,omitempty"`
    Phone *string `json:"phone,omitempty"`
    PhoneExt *string `json:"phoneExt,omitempty"`
    PhoneType *string `json:"phoneType,omitempty"`
    
}

