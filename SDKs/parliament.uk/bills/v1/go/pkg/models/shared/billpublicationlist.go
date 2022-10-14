package shared

type BillPublicationList struct {
	BillID       *int32            `json:"billId,omitempty"`
	Publications []BillPublication `json:"publications,omitempty"`
}
