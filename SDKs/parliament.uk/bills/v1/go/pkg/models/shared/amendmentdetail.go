package shared

type AmendmentDetail struct {
	AmendmentID           *int32                 `json:"amendmentId,omitempty"`
	AmendmentLines        []AmendmentLine        `json:"amendmentLines,omitempty"`
	AmendmentNote         *string                `json:"amendmentNote,omitempty"`
	AmendmentPosition     *string                `json:"amendmentPosition,omitempty"`
	AmendmentType         *AmendmentTypeEnum     `json:"amendmentType,omitempty"`
	BillID                *int32                 `json:"billId,omitempty"`
	BillStageID           *int32                 `json:"billStageId,omitempty"`
	Clause                *int32                 `json:"clause,omitempty"`
	Decision              *AmendmentDecisionEnum `json:"decision,omitempty"`
	ExplanatoryText       *string                `json:"explanatoryText,omitempty"`
	ExplanatoryTextPrefix *string                `json:"explanatoryTextPrefix,omitempty"`
	LineNumber            *int32                 `json:"lineNumber,omitempty"`
	MarshalledListText    *string                `json:"marshalledListText,omitempty"`
	PageNumber            *int32                 `json:"pageNumber,omitempty"`
	Schedule              *int32                 `json:"schedule,omitempty"`
	Sponsors              []AmendmentMember      `json:"sponsors,omitempty"`
}
