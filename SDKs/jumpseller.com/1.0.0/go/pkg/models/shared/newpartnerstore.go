package shared

type NewPartnerStoreStore struct {
	Code         *string `json:"code"`
	EmailPartner *string `json:"email_partner"`
	Name         *string `json:"name"`
	RedirectURL  *string `json:"redirect_url"`
}

type NewPartnerStore struct {
	Store *NewPartnerStoreStore `json:"store"`
}
