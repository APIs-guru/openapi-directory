package shared

type Response struct {
	CreateFooter            *CreateFooterResponse            `json:"createFooter"`
	CreateFootnote          *CreateFootnoteResponse          `json:"createFootnote"`
	CreateHeader            *CreateHeaderResponse            `json:"createHeader"`
	CreateNamedRange        *CreateNamedRangeResponse        `json:"createNamedRange"`
	InsertInlineImage       *InsertInlineImageResponse       `json:"insertInlineImage"`
	InsertInlineSheetsChart *InsertInlineSheetsChartResponse `json:"insertInlineSheetsChart"`
	ReplaceAllText          *ReplaceAllTextResponse          `json:"replaceAllText"`
}
