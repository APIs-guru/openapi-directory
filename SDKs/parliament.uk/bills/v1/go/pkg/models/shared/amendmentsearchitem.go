package shared

type AmendmentSearchItem struct {
	AmendmentID        *int32                 `json:"amendmentId"`
	AmendmentPosition  *string                `json:"amendmentPosition"`
	AmendmentType      *AmendmentTypeEnum     `json:"amendmentType"`
	BillID             *int32                 `json:"billId"`
	BillStageID        *int32                 `json:"billStageId"`
	Clause             *int32                 `json:"clause"`
	Decision           *AmendmentDecisionEnum `json:"decision"`
	LineNumber         *int32                 `json:"lineNumber"`
	MarshalledListText *string                `json:"marshalledListText"`
	PageNumber         *int32                 `json:"pageNumber"`
	Schedule           *int32                 `json:"schedule"`
	Sponsors           []AmendmentMember      `json:"sponsors"`
	SummaryText        []string               `json:"summaryText"`
}
