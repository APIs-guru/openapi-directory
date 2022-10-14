package shared

type SubaccountAddResponseEtatEtat struct {
	Code            *float64 `json:"code,omitempty"`
	Message         *string  `json:"message,omitempty"`
	SubAccountID    *string  `json:"subAccountId,omitempty"`
	SubAccountKeyID *string  `json:"subAccountKeyId,omitempty"`
	SubAccountLogin *string  `json:"subAccountLogin,omitempty"`
}

type SubaccountAddResponseEtat struct {
	Etat []SubaccountAddResponseEtatEtat `json:"etat,omitempty"`
}

type SubaccountAddResponse struct {
	Etat *SubaccountAddResponseEtat `json:"etat,omitempty"`
}
