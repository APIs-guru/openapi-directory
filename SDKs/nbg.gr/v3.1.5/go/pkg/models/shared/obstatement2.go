package shared

import (
"time")

type ObStatement2 struct {
    AccountID string `json:"AccountId"`
    CreationDateTime time.Time `json:"CreationDateTime"`
    EndDateTime time.Time `json:"EndDateTime"`
    StartDateTime time.Time `json:"StartDateTime"`
    StatementID *string `json:"StatementId,omitempty"`
    StatementReference *string `json:"StatementReference,omitempty"`
    Type ObExternalStatementType1CodeEnum `json:"Type"`
    
}

