package shared



type AmendmentSearchItem struct {
    AmendmentID *int32 `json:"amendmentId,omitempty"`
    AmendmentPosition *string `json:"amendmentPosition,omitempty"`
    AmendmentType *AmendmentTypeEnum `json:"amendmentType,omitempty"`
    BillID *int32 `json:"billId,omitempty"`
    BillStageID *int32 `json:"billStageId,omitempty"`
    Clause *int32 `json:"clause,omitempty"`
    Decision *AmendmentDecisionEnum `json:"decision,omitempty"`
    LineNumber *int32 `json:"lineNumber,omitempty"`
    MarshalledListText *string `json:"marshalledListText,omitempty"`
    PageNumber *int32 `json:"pageNumber,omitempty"`
    Schedule *int32 `json:"schedule,omitempty"`
    Sponsors []AmendmentMember `json:"sponsors,omitempty"`
    SummaryText []string `json:"summaryText,omitempty"`
    
}

