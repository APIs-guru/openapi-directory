package shared



type AttestorPublicKey struct {
    ASCIIArmoredPgpPublicKey *string `json:"asciiArmoredPgpPublicKey,omitempty"`
    Comment *string `json:"comment,omitempty"`
    ID *string `json:"id,omitempty"`
    PkixPublicKey *PkixPublicKey `json:"pkixPublicKey,omitempty"`
    
}

