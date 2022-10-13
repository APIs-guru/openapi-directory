package shared

type AmendmentDetail struct {
	AmendmentID           *int32                 `json:"amendmentId"`
	AmendmentLines        []AmendmentLine        `json:"amendmentLines"`
	AmendmentNote         *string                `json:"amendmentNote"`
	AmendmentPosition     *string                `json:"amendmentPosition"`
	AmendmentType         *AmendmentTypeEnum     `json:"amendmentType"`
	BillID                *int32                 `json:"billId"`
	BillStageID           *int32                 `json:"billStageId"`
	Clause                *int32                 `json:"clause"`
	Decision              *AmendmentDecisionEnum `json:"decision"`
	ExplanatoryText       *string                `json:"explanatoryText"`
	ExplanatoryTextPrefix *string                `json:"explanatoryTextPrefix"`
	LineNumber            *int32                 `json:"lineNumber"`
	MarshalledListText    *string                `json:"marshalledListText"`
	PageNumber            *int32                 `json:"pageNumber"`
	Schedule              *int32                 `json:"schedule"`
	Sponsors              []AmendmentMember      `json:"sponsors"`
}
