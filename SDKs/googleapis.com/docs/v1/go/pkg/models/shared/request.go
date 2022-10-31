package shared

type Request struct {
	CreateFooter                *CreateFooterRequest                `json:"createFooter,omitempty"`
	CreateFootnote              *CreateFootnoteRequest              `json:"createFootnote,omitempty"`
	CreateHeader                *CreateHeaderRequest                `json:"createHeader,omitempty"`
	CreateNamedRange            *CreateNamedRangeRequest            `json:"createNamedRange,omitempty"`
	CreateParagraphBullets      *CreateParagraphBulletsRequest      `json:"createParagraphBullets,omitempty"`
	DeleteContentRange          *DeleteContentRangeRequest          `json:"deleteContentRange,omitempty"`
	DeleteFooter                *DeleteFooterRequest                `json:"deleteFooter,omitempty"`
	DeleteHeader                *DeleteHeaderRequest                `json:"deleteHeader,omitempty"`
	DeleteNamedRange            *DeleteNamedRangeRequest            `json:"deleteNamedRange,omitempty"`
	DeleteParagraphBullets      *DeleteParagraphBulletsRequest      `json:"deleteParagraphBullets,omitempty"`
	DeletePositionedObject      *DeletePositionedObjectRequest      `json:"deletePositionedObject,omitempty"`
	DeleteTableColumn           *DeleteTableColumnRequest           `json:"deleteTableColumn,omitempty"`
	DeleteTableRow              *DeleteTableRowRequest              `json:"deleteTableRow,omitempty"`
	InsertInlineImage           *InsertInlineImageRequest           `json:"insertInlineImage,omitempty"`
	InsertPageBreak             *InsertPageBreakRequest             `json:"insertPageBreak,omitempty"`
	InsertSectionBreak          *InsertSectionBreakRequest          `json:"insertSectionBreak,omitempty"`
	InsertTable                 *InsertTableRequest                 `json:"insertTable,omitempty"`
	InsertTableColumn           *InsertTableColumnRequest           `json:"insertTableColumn,omitempty"`
	InsertTableRow              *InsertTableRowRequest              `json:"insertTableRow,omitempty"`
	InsertText                  *InsertTextRequest                  `json:"insertText,omitempty"`
	MergeTableCells             *MergeTableCellsRequest             `json:"mergeTableCells,omitempty"`
	PinTableHeaderRows          *PinTableHeaderRowsRequest          `json:"pinTableHeaderRows,omitempty"`
	ReplaceAllText              *ReplaceAllTextRequest              `json:"replaceAllText,omitempty"`
	ReplaceImage                *ReplaceImageRequest                `json:"replaceImage,omitempty"`
	ReplaceNamedRangeContent    *ReplaceNamedRangeContentRequest    `json:"replaceNamedRangeContent,omitempty"`
	UnmergeTableCells           *UnmergeTableCellsRequest           `json:"unmergeTableCells,omitempty"`
	UpdateDocumentStyle         *UpdateDocumentStyleRequest         `json:"updateDocumentStyle,omitempty"`
	UpdateParagraphStyle        *UpdateParagraphStyleRequest        `json:"updateParagraphStyle,omitempty"`
	UpdateSectionStyle          *UpdateSectionStyleRequest          `json:"updateSectionStyle,omitempty"`
	UpdateTableCellStyle        *UpdateTableCellStyleRequest        `json:"updateTableCellStyle,omitempty"`
	UpdateTableColumnProperties *UpdateTableColumnPropertiesRequest `json:"updateTableColumnProperties,omitempty"`
	UpdateTableRowStyle         *UpdateTableRowStyleRequest         `json:"updateTableRowStyle,omitempty"`
	UpdateTextStyle             *UpdateTextStyleRequest             `json:"updateTextStyle,omitempty"`
}
