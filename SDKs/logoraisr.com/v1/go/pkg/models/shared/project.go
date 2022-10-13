package shared

import (
	"time"
)

type Project struct {
	Created         *time.Time `json:"created"`
	FileID          *string    `json:"file_id"`
	ID              *int64     `json:"id"`
	PaypalPaymentID *string    `json:"paypal_payment_id"`
	Process         *Process   `json:"process"`
	ProcessID       string     `json:"process_id"`
	ProjectNumber   *int64     `json:"project_number"`
	ProjectTitle    *string    `json:"project_title"`
	ResultFileID    *string    `json:"result_file_id"`
}
