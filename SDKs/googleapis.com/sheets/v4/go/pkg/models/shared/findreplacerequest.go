package shared

type FindReplaceRequest struct {
	AllSheets       *bool      `json:"allSheets"`
	Find            *string    `json:"find"`
	IncludeFormulas *bool      `json:"includeFormulas"`
	MatchCase       *bool      `json:"matchCase"`
	MatchEntireCell *bool      `json:"matchEntireCell"`
	Range           *GridRange `json:"range"`
	Replacement     *string    `json:"replacement"`
	SearchByRegex   *bool      `json:"searchByRegex"`
	SheetID         *int32     `json:"sheetId"`
}
