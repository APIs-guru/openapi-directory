package shared

type Request struct {
	CreateImage                     *CreateImageRequest                     `json:"createImage,omitempty"`
	CreateLine                      *CreateLineRequest                      `json:"createLine,omitempty"`
	CreateParagraphBullets          *CreateParagraphBulletsRequest          `json:"createParagraphBullets,omitempty"`
	CreateShape                     *CreateShapeRequest                     `json:"createShape,omitempty"`
	CreateSheetsChart               *CreateSheetsChartRequest               `json:"createSheetsChart,omitempty"`
	CreateSlide                     *CreateSlideRequest                     `json:"createSlide,omitempty"`
	CreateTable                     *CreateTableRequest                     `json:"createTable,omitempty"`
	CreateVideo                     *CreateVideoRequest                     `json:"createVideo,omitempty"`
	DeleteObject                    *DeleteObjectRequest                    `json:"deleteObject,omitempty"`
	DeleteParagraphBullets          *DeleteParagraphBulletsRequest          `json:"deleteParagraphBullets,omitempty"`
	DeleteTableColumn               *DeleteTableColumnRequest               `json:"deleteTableColumn,omitempty"`
	DeleteTableRow                  *DeleteTableRowRequest                  `json:"deleteTableRow,omitempty"`
	DeleteText                      *DeleteTextRequest                      `json:"deleteText,omitempty"`
	DuplicateObject                 *DuplicateObjectRequest                 `json:"duplicateObject,omitempty"`
	GroupObjects                    *GroupObjectsRequest                    `json:"groupObjects,omitempty"`
	InsertTableColumns              *InsertTableColumnsRequest              `json:"insertTableColumns,omitempty"`
	InsertTableRows                 *InsertTableRowsRequest                 `json:"insertTableRows,omitempty"`
	InsertText                      *InsertTextRequest                      `json:"insertText,omitempty"`
	MergeTableCells                 *MergeTableCellsRequest                 `json:"mergeTableCells,omitempty"`
	RefreshSheetsChart              *RefreshSheetsChartRequest              `json:"refreshSheetsChart,omitempty"`
	ReplaceAllShapesWithImage       *ReplaceAllShapesWithImageRequest       `json:"replaceAllShapesWithImage,omitempty"`
	ReplaceAllShapesWithSheetsChart *ReplaceAllShapesWithSheetsChartRequest `json:"replaceAllShapesWithSheetsChart,omitempty"`
	ReplaceAllText                  *ReplaceAllTextRequest                  `json:"replaceAllText,omitempty"`
	ReplaceImage                    *ReplaceImageRequest                    `json:"replaceImage,omitempty"`
	RerouteLine                     *RerouteLineRequest                     `json:"rerouteLine,omitempty"`
	UngroupObjects                  *UngroupObjectsRequest                  `json:"ungroupObjects,omitempty"`
	UnmergeTableCells               *UnmergeTableCellsRequest               `json:"unmergeTableCells,omitempty"`
	UpdateImageProperties           *UpdateImagePropertiesRequest           `json:"updateImageProperties,omitempty"`
	UpdateLineCategory              *UpdateLineCategoryRequest              `json:"updateLineCategory,omitempty"`
	UpdateLineProperties            *UpdateLinePropertiesRequest            `json:"updateLineProperties,omitempty"`
	UpdatePageElementAltText        *UpdatePageElementAltTextRequest        `json:"updatePageElementAltText,omitempty"`
	UpdatePageElementTransform      *UpdatePageElementTransformRequest      `json:"updatePageElementTransform,omitempty"`
	UpdatePageElementsZOrder        *UpdatePageElementsZOrderRequest        `json:"updatePageElementsZOrder,omitempty"`
	UpdatePageProperties            *UpdatePagePropertiesRequest            `json:"updatePageProperties,omitempty"`
	UpdateParagraphStyle            *UpdateParagraphStyleRequest            `json:"updateParagraphStyle,omitempty"`
	UpdateShapeProperties           *UpdateShapePropertiesRequest           `json:"updateShapeProperties,omitempty"`
	UpdateSlideProperties           *UpdateSlidePropertiesRequest           `json:"updateSlideProperties,omitempty"`
	UpdateSlidesPosition            *UpdateSlidesPositionRequest            `json:"updateSlidesPosition,omitempty"`
	UpdateTableBorderProperties     *UpdateTableBorderPropertiesRequest     `json:"updateTableBorderProperties,omitempty"`
	UpdateTableCellProperties       *UpdateTableCellPropertiesRequest       `json:"updateTableCellProperties,omitempty"`
	UpdateTableColumnProperties     *UpdateTableColumnPropertiesRequest     `json:"updateTableColumnProperties,omitempty"`
	UpdateTableRowProperties        *UpdateTableRowPropertiesRequest        `json:"updateTableRowProperties,omitempty"`
	UpdateTextStyle                 *UpdateTextStyleRequest                 `json:"updateTextStyle,omitempty"`
	UpdateVideoProperties           *UpdateVideoPropertiesRequest           `json:"updateVideoProperties,omitempty"`
}
