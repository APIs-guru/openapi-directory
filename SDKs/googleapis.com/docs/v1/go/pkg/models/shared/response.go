package shared



type Response struct {
    CreateFooter *CreateFooterResponse `json:"createFooter,omitempty"`
    CreateFootnote *CreateFootnoteResponse `json:"createFootnote,omitempty"`
    CreateHeader *CreateHeaderResponse `json:"createHeader,omitempty"`
    CreateNamedRange *CreateNamedRangeResponse `json:"createNamedRange,omitempty"`
    InsertInlineImage *InsertInlineImageResponse `json:"insertInlineImage,omitempty"`
    InsertInlineSheetsChart *InsertInlineSheetsChartResponse `json:"insertInlineSheetsChart,omitempty"`
    ReplaceAllText *ReplaceAllTextResponse `json:"replaceAllText,omitempty"`
    
}

