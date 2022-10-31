package shared



type PsuData struct {
    AdditionalEncryptedPassword *string `json:"additionalEncryptedPassword,omitempty"`
    AdditionalPassword *string `json:"additionalPassword,omitempty"`
    EncryptedPassword *string `json:"encryptedPassword,omitempty"`
    Password *string `json:"password,omitempty"`
    
}

