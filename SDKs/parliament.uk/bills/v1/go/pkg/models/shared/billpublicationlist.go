package shared

type BillPublicationList struct {
	BillID       *int32            `json:"billId"`
	Publications []BillPublication `json:"publications"`
}
