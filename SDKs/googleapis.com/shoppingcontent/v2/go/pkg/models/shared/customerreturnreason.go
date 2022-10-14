package shared

type CustomerReturnReason struct {
	Description *string `json:"description,omitempty"`
	ReasonCode  *string `json:"reasonCode,omitempty"`
}
