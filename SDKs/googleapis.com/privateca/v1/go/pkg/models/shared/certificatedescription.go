package shared



type CertificateDescription struct {
    AiaIssuingCertificateUrls []string `json:"aiaIssuingCertificateUrls,omitempty"`
    AuthorityKeyID *KeyID `json:"authorityKeyId,omitempty"`
    CertFingerprint *CertificateFingerprint `json:"certFingerprint,omitempty"`
    CrlDistributionPoints []string `json:"crlDistributionPoints,omitempty"`
    PublicKey *PublicKey `json:"publicKey,omitempty"`
    SubjectDescription *SubjectDescription `json:"subjectDescription,omitempty"`
    SubjectKeyID *KeyID `json:"subjectKeyId,omitempty"`
    X509Description *X509Parameters `json:"x509Description,omitempty"`
    
}

