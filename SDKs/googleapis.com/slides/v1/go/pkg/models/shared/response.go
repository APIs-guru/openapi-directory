package shared

type Response struct {
	CreateImage                     *CreateImageResponse                     `json:"createImage,omitempty"`
	CreateLine                      *CreateLineResponse                      `json:"createLine,omitempty"`
	CreateShape                     *CreateShapeResponse                     `json:"createShape,omitempty"`
	CreateSheetsChart               *CreateSheetsChartResponse               `json:"createSheetsChart,omitempty"`
	CreateSlide                     *CreateSlideResponse                     `json:"createSlide,omitempty"`
	CreateTable                     *CreateTableResponse                     `json:"createTable,omitempty"`
	CreateVideo                     *CreateVideoResponse                     `json:"createVideo,omitempty"`
	DuplicateObject                 *DuplicateObjectResponse                 `json:"duplicateObject,omitempty"`
	GroupObjects                    *GroupObjectsResponse                    `json:"groupObjects,omitempty"`
	ReplaceAllShapesWithImage       *ReplaceAllShapesWithImageResponse       `json:"replaceAllShapesWithImage,omitempty"`
	ReplaceAllShapesWithSheetsChart *ReplaceAllShapesWithSheetsChartResponse `json:"replaceAllShapesWithSheetsChart,omitempty"`
	ReplaceAllText                  *ReplaceAllTextResponse                  `json:"replaceAllText,omitempty"`
}
