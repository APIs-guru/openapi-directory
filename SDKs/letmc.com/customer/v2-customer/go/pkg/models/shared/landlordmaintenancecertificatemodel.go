package shared

import (
"time")

type LandlordMaintenanceCertificateModel struct {
    Due *time.Time `json:"Due,omitempty"`
    Files []LettingsLandlordDocument `json:"Files,omitempty"`
    Status *string `json:"Status,omitempty"`
    Type *string `json:"Type,omitempty"`
    
}

