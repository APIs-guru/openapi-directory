package shared

type Request struct {
	CreateImage                     *CreateImageRequest                     `json:"createImage"`
	CreateLine                      *CreateLineRequest                      `json:"createLine"`
	CreateParagraphBullets          *CreateParagraphBulletsRequest          `json:"createParagraphBullets"`
	CreateShape                     *CreateShapeRequest                     `json:"createShape"`
	CreateSheetsChart               *CreateSheetsChartRequest               `json:"createSheetsChart"`
	CreateSlide                     *CreateSlideRequest                     `json:"createSlide"`
	CreateTable                     *CreateTableRequest                     `json:"createTable"`
	CreateVideo                     *CreateVideoRequest                     `json:"createVideo"`
	DeleteObject                    *DeleteObjectRequest                    `json:"deleteObject"`
	DeleteParagraphBullets          *DeleteParagraphBulletsRequest          `json:"deleteParagraphBullets"`
	DeleteTableColumn               *DeleteTableColumnRequest               `json:"deleteTableColumn"`
	DeleteTableRow                  *DeleteTableRowRequest                  `json:"deleteTableRow"`
	DeleteText                      *DeleteTextRequest                      `json:"deleteText"`
	DuplicateObject                 *DuplicateObjectRequest                 `json:"duplicateObject"`
	GroupObjects                    *GroupObjectsRequest                    `json:"groupObjects"`
	InsertTableColumns              *InsertTableColumnsRequest              `json:"insertTableColumns"`
	InsertTableRows                 *InsertTableRowsRequest                 `json:"insertTableRows"`
	InsertText                      *InsertTextRequest                      `json:"insertText"`
	MergeTableCells                 *MergeTableCellsRequest                 `json:"mergeTableCells"`
	RefreshSheetsChart              *RefreshSheetsChartRequest              `json:"refreshSheetsChart"`
	ReplaceAllShapesWithImage       *ReplaceAllShapesWithImageRequest       `json:"replaceAllShapesWithImage"`
	ReplaceAllShapesWithSheetsChart *ReplaceAllShapesWithSheetsChartRequest `json:"replaceAllShapesWithSheetsChart"`
	ReplaceAllText                  *ReplaceAllTextRequest                  `json:"replaceAllText"`
	ReplaceImage                    *ReplaceImageRequest                    `json:"replaceImage"`
	RerouteLine                     *RerouteLineRequest                     `json:"rerouteLine"`
	UngroupObjects                  *UngroupObjectsRequest                  `json:"ungroupObjects"`
	UnmergeTableCells               *UnmergeTableCellsRequest               `json:"unmergeTableCells"`
	UpdateImageProperties           *UpdateImagePropertiesRequest           `json:"updateImageProperties"`
	UpdateLineCategory              *UpdateLineCategoryRequest              `json:"updateLineCategory"`
	UpdateLineProperties            *UpdateLinePropertiesRequest            `json:"updateLineProperties"`
	UpdatePageElementAltText        *UpdatePageElementAltTextRequest        `json:"updatePageElementAltText"`
	UpdatePageElementTransform      *UpdatePageElementTransformRequest      `json:"updatePageElementTransform"`
	UpdatePageElementsZOrder        *UpdatePageElementsZOrderRequest        `json:"updatePageElementsZOrder"`
	UpdatePageProperties            *UpdatePagePropertiesRequest            `json:"updatePageProperties"`
	UpdateParagraphStyle            *UpdateParagraphStyleRequest            `json:"updateParagraphStyle"`
	UpdateShapeProperties           *UpdateShapePropertiesRequest           `json:"updateShapeProperties"`
	UpdateSlideProperties           *UpdateSlidePropertiesRequest           `json:"updateSlideProperties"`
	UpdateSlidesPosition            *UpdateSlidesPositionRequest            `json:"updateSlidesPosition"`
	UpdateTableBorderProperties     *UpdateTableBorderPropertiesRequest     `json:"updateTableBorderProperties"`
	UpdateTableCellProperties       *UpdateTableCellPropertiesRequest       `json:"updateTableCellProperties"`
	UpdateTableColumnProperties     *UpdateTableColumnPropertiesRequest     `json:"updateTableColumnProperties"`
	UpdateTableRowProperties        *UpdateTableRowPropertiesRequest        `json:"updateTableRowProperties"`
	UpdateTextStyle                 *UpdateTextStyleRequest                 `json:"updateTextStyle"`
	UpdateVideoProperties           *UpdateVideoPropertiesRequest           `json:"updateVideoProperties"`
}
