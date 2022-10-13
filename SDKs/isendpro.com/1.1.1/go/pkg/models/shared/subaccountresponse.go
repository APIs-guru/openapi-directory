package shared

type SubaccountResponseEtatEtat struct {
	Code            *string `json:"code"`
	Message         *string `json:"message"`
	SubAccountID    *string `json:"subAccountId"`
	SubAccountKeyid *string `json:"subAccountKeyid"`
}

type SubaccountResponseEtat struct {
	Etat []SubaccountResponseEtatEtat `json:"etat"`
}

type SubaccountResponse struct {
	Etat *SubaccountResponseEtat `json:"etat"`
}
