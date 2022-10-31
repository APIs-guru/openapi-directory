package shared



type FindReplaceRequest struct {
    AllSheets *bool `json:"allSheets,omitempty"`
    Find *string `json:"find,omitempty"`
    IncludeFormulas *bool `json:"includeFormulas,omitempty"`
    MatchCase *bool `json:"matchCase,omitempty"`
    MatchEntireCell *bool `json:"matchEntireCell,omitempty"`
    Range *GridRange `json:"range,omitempty"`
    Replacement *string `json:"replacement,omitempty"`
    SearchByRegex *bool `json:"searchByRegex,omitempty"`
    SheetID *int32 `json:"sheetId,omitempty"`
    
}

