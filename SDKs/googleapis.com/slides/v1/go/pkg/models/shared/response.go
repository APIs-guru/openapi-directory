package shared

type Response struct {
	CreateImage                     *CreateImageResponse                     `json:"createImage"`
	CreateLine                      *CreateLineResponse                      `json:"createLine"`
	CreateShape                     *CreateShapeResponse                     `json:"createShape"`
	CreateSheetsChart               *CreateSheetsChartResponse               `json:"createSheetsChart"`
	CreateSlide                     *CreateSlideResponse                     `json:"createSlide"`
	CreateTable                     *CreateTableResponse                     `json:"createTable"`
	CreateVideo                     *CreateVideoResponse                     `json:"createVideo"`
	DuplicateObject                 *DuplicateObjectResponse                 `json:"duplicateObject"`
	GroupObjects                    *GroupObjectsResponse                    `json:"groupObjects"`
	ReplaceAllShapesWithImage       *ReplaceAllShapesWithImageResponse       `json:"replaceAllShapesWithImage"`
	ReplaceAllShapesWithSheetsChart *ReplaceAllShapesWithSheetsChartResponse `json:"replaceAllShapesWithSheetsChart"`
	ReplaceAllText                  *ReplaceAllTextResponse                  `json:"replaceAllText"`
}
