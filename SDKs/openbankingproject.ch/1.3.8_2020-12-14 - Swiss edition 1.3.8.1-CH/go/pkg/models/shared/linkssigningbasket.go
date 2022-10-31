package shared



type LinksSigningBasket struct {
    ScaOAuth *HrefType `json:"scaOAuth,omitempty"`
    ScaRedirect *HrefType `json:"scaRedirect,omitempty"`
    ScaStatus *HrefType `json:"scaStatus,omitempty"`
    Self *HrefType `json:"self,omitempty"`
    StartAuthorisation *HrefType `json:"startAuthorisation,omitempty"`
    StartAuthorisationWithAuthenticationMethodSelection *HrefType `json:"startAuthorisationWithAuthenticationMethodSelection,omitempty"`
    StartAuthorisationWithEncryptedPsuAuthentication *HrefType `json:"startAuthorisationWithEncryptedPsuAuthentication,omitempty"`
    StartAuthorisationWithPsuAuthentication *HrefType `json:"startAuthorisationWithPsuAuthentication,omitempty"`
    StartAuthorisationWithPsuIdentification *HrefType `json:"startAuthorisationWithPsuIdentification,omitempty"`
    StartAuthorisationWithTransactionAuthorisation *HrefType `json:"startAuthorisationWithTransactionAuthorisation,omitempty"`
    Status *HrefType `json:"status,omitempty"`
    
}

