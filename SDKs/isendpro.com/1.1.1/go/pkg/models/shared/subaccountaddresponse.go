package shared

type SubaccountAddResponseEtatEtat struct {
	Code            *float64 `json:"code"`
	Message         *string  `json:"message"`
	SubAccountID    *string  `json:"subAccountId"`
	SubAccountKeyID *string  `json:"subAccountKeyId"`
	SubAccountLogin *string  `json:"subAccountLogin"`
}

type SubaccountAddResponseEtat struct {
	Etat []SubaccountAddResponseEtatEtat `json:"etat"`
}

type SubaccountAddResponse struct {
	Etat *SubaccountAddResponseEtat `json:"etat"`
}
