package shared

type CustomerReturnReason struct {
	Description *string `json:"description"`
	ReasonCode  *string `json:"reasonCode"`
}
