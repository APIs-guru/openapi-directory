package shared

type SubaccountResponseEtatEtat struct {
	Code            *string `json:"code,omitempty"`
	Message         *string `json:"message,omitempty"`
	SubAccountID    *string `json:"subAccountId,omitempty"`
	SubAccountKeyid *string `json:"subAccountKeyid,omitempty"`
}

type SubaccountResponseEtat struct {
	Etat []SubaccountResponseEtatEtat `json:"etat,omitempty"`
}

type SubaccountResponse struct {
	Etat *SubaccountResponseEtat `json:"etat,omitempty"`
}
