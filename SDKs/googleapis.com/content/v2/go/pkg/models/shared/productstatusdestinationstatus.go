package shared

type ProductStatusDestinationStatus struct {
	ApprovalPending *bool   `json:"approvalPending"`
	ApprovalStatus  *string `json:"approvalStatus"`
	Destination     *string `json:"destination"`
	Intention       *string `json:"intention"`
}
