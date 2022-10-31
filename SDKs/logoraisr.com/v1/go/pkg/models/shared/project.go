package shared

import (
"time")

type Project struct {
    Created *time.Time `json:"created,omitempty"`
    FileID *string `json:"file_id,omitempty"`
    ID *int64 `json:"id,omitempty"`
    PaypalPaymentID *string `json:"paypal_payment_id,omitempty"`
    Process *Process `json:"process,omitempty"`
    ProcessID string `json:"process_id"`
    ProjectNumber *int64 `json:"project_number,omitempty"`
    ProjectTitle *string `json:"project_title,omitempty"`
    ResultFileID *string `json:"result_file_id,omitempty"`
    
}

