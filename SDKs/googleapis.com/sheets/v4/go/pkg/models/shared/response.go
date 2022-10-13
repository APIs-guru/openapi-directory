package shared

type Response struct {
	AddBanding                   *AddBandingResponse                   `json:"addBanding"`
	AddChart                     *AddChartResponse                     `json:"addChart"`
	AddDataSource                *AddDataSourceResponse                `json:"addDataSource"`
	AddDimensionGroup            *AddDimensionGroupResponse            `json:"addDimensionGroup"`
	AddFilterView                *AddFilterViewResponse                `json:"addFilterView"`
	AddNamedRange                *AddNamedRangeResponse                `json:"addNamedRange"`
	AddProtectedRange            *AddProtectedRangeResponse            `json:"addProtectedRange"`
	AddSheet                     *AddSheetResponse                     `json:"addSheet"`
	AddSlicer                    *AddSlicerResponse                    `json:"addSlicer"`
	CreateDeveloperMetadata      *CreateDeveloperMetadataResponse      `json:"createDeveloperMetadata"`
	DeleteConditionalFormatRule  *DeleteConditionalFormatRuleResponse  `json:"deleteConditionalFormatRule"`
	DeleteDeveloperMetadata      *DeleteDeveloperMetadataResponse      `json:"deleteDeveloperMetadata"`
	DeleteDimensionGroup         *DeleteDimensionGroupResponse         `json:"deleteDimensionGroup"`
	DeleteDuplicates             *DeleteDuplicatesResponse             `json:"deleteDuplicates"`
	DuplicateFilterView          *DuplicateFilterViewResponse          `json:"duplicateFilterView"`
	DuplicateSheet               *DuplicateSheetResponse               `json:"duplicateSheet"`
	FindReplace                  *FindReplaceResponse                  `json:"findReplace"`
	RefreshDataSource            *RefreshDataSourceResponse            `json:"refreshDataSource"`
	TrimWhitespace               *TrimWhitespaceResponse               `json:"trimWhitespace"`
	UpdateConditionalFormatRule  *UpdateConditionalFormatRuleResponse  `json:"updateConditionalFormatRule"`
	UpdateDataSource             *UpdateDataSourceResponse             `json:"updateDataSource"`
	UpdateDeveloperMetadata      *UpdateDeveloperMetadataResponse      `json:"updateDeveloperMetadata"`
	UpdateEmbeddedObjectPosition *UpdateEmbeddedObjectPositionResponse `json:"updateEmbeddedObjectPosition"`
}
