package shared

type LinksSigningBasket struct {
	ScaOAuth                                            *HrefType `json:"scaOAuth"`
	ScaRedirect                                         *HrefType `json:"scaRedirect"`
	ScaStatus                                           *HrefType `json:"scaStatus"`
	Self                                                *HrefType `json:"self"`
	StartAuthorisation                                  *HrefType `json:"startAuthorisation"`
	StartAuthorisationWithAuthenticationMethodSelection *HrefType `json:"startAuthorisationWithAuthenticationMethodSelection"`
	StartAuthorisationWithEncryptedPsuAuthentication    *HrefType `json:"startAuthorisationWithEncryptedPsuAuthentication"`
	StartAuthorisationWithPsuAuthentication             *HrefType `json:"startAuthorisationWithPsuAuthentication"`
	StartAuthorisationWithPsuIdentification             *HrefType `json:"startAuthorisationWithPsuIdentification"`
	StartAuthorisationWithTransactionAuthorisation      *HrefType `json:"startAuthorisationWithTransactionAuthorisation"`
	Status                                              *HrefType `json:"status"`
}
