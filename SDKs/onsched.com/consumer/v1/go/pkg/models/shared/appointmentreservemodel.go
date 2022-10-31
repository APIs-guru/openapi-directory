package shared



type AppointmentReserveModel struct {
    CustomerMessage *string `json:"customerMessage,omitempty"`
    Email *string `json:"email,omitempty"`
    Name *string `json:"name,omitempty"`
    Notes *string `json:"notes,omitempty"`
    Phone *string `json:"phone,omitempty"`
    PhoneExt *string `json:"phoneExt,omitempty"`
    PhoneType *string `json:"phoneType,omitempty"`
    
}

