package shared

type Request struct {
	CreateFooter                *CreateFooterRequest                `json:"createFooter"`
	CreateFootnote              *CreateFootnoteRequest              `json:"createFootnote"`
	CreateHeader                *CreateHeaderRequest                `json:"createHeader"`
	CreateNamedRange            *CreateNamedRangeRequest            `json:"createNamedRange"`
	CreateParagraphBullets      *CreateParagraphBulletsRequest      `json:"createParagraphBullets"`
	DeleteContentRange          *DeleteContentRangeRequest          `json:"deleteContentRange"`
	DeleteFooter                *DeleteFooterRequest                `json:"deleteFooter"`
	DeleteHeader                *DeleteHeaderRequest                `json:"deleteHeader"`
	DeleteNamedRange            *DeleteNamedRangeRequest            `json:"deleteNamedRange"`
	DeleteParagraphBullets      *DeleteParagraphBulletsRequest      `json:"deleteParagraphBullets"`
	DeletePositionedObject      *DeletePositionedObjectRequest      `json:"deletePositionedObject"`
	DeleteTableColumn           *DeleteTableColumnRequest           `json:"deleteTableColumn"`
	DeleteTableRow              *DeleteTableRowRequest              `json:"deleteTableRow"`
	InsertInlineImage           *InsertInlineImageRequest           `json:"insertInlineImage"`
	InsertPageBreak             *InsertPageBreakRequest             `json:"insertPageBreak"`
	InsertSectionBreak          *InsertSectionBreakRequest          `json:"insertSectionBreak"`
	InsertTable                 *InsertTableRequest                 `json:"insertTable"`
	InsertTableColumn           *InsertTableColumnRequest           `json:"insertTableColumn"`
	InsertTableRow              *InsertTableRowRequest              `json:"insertTableRow"`
	InsertText                  *InsertTextRequest                  `json:"insertText"`
	MergeTableCells             *MergeTableCellsRequest             `json:"mergeTableCells"`
	PinTableHeaderRows          *PinTableHeaderRowsRequest          `json:"pinTableHeaderRows"`
	ReplaceAllText              *ReplaceAllTextRequest              `json:"replaceAllText"`
	ReplaceImage                *ReplaceImageRequest                `json:"replaceImage"`
	ReplaceNamedRangeContent    *ReplaceNamedRangeContentRequest    `json:"replaceNamedRangeContent"`
	UnmergeTableCells           *UnmergeTableCellsRequest           `json:"unmergeTableCells"`
	UpdateDocumentStyle         *UpdateDocumentStyleRequest         `json:"updateDocumentStyle"`
	UpdateParagraphStyle        *UpdateParagraphStyleRequest        `json:"updateParagraphStyle"`
	UpdateSectionStyle          *UpdateSectionStyleRequest          `json:"updateSectionStyle"`
	UpdateTableCellStyle        *UpdateTableCellStyleRequest        `json:"updateTableCellStyle"`
	UpdateTableColumnProperties *UpdateTableColumnPropertiesRequest `json:"updateTableColumnProperties"`
	UpdateTableRowStyle         *UpdateTableRowStyleRequest         `json:"updateTableRowStyle"`
	UpdateTextStyle             *UpdateTextStyleRequest             `json:"updateTextStyle"`
}
