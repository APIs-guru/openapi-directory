package shared

type TransferRequest struct {
	FromOfferingID *string `json:"fromOfferingId"`
	SendInvite     *bool   `json:"sendInvite"`
	ToOfferingID   *string `json:"toOfferingId"`
}
