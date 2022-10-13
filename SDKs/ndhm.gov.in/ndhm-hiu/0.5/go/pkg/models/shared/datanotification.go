package shared

type DataNotification struct {
	Entries       []interface{} `json:"entries"`
	KeyMaterial   KeyMaterial   `json:"keyMaterial"`
	PageCount     int64         `json:"pageCount"`
	PageNumber    int64         `json:"pageNumber"`
	TransactionID string        `json:"transactionId"`
}
