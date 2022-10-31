package shared

type NewPartnerStoreStore struct {
	Code         *string `json:"code,omitempty"`
	EmailPartner *string `json:"email_partner,omitempty"`
	Name         *string `json:"name,omitempty"`
	RedirectURL  *string `json:"redirect_url,omitempty"`
}

type NewPartnerStore struct {
	Store *NewPartnerStoreStore `json:"store,omitempty"`
}
