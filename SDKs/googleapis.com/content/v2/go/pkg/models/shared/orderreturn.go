package shared

type OrderReturn struct {
	Actor        *string `json:"actor"`
	CreationDate *string `json:"creationDate"`
	Quantity     *int64  `json:"quantity"`
	Reason       *string `json:"reason"`
	ReasonText   *string `json:"reasonText"`
}
