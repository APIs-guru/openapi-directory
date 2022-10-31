package shared



type Response struct {
    AddBanding *AddBandingResponse `json:"addBanding,omitempty"`
    AddChart *AddChartResponse `json:"addChart,omitempty"`
    AddDataSource *AddDataSourceResponse `json:"addDataSource,omitempty"`
    AddDimensionGroup *AddDimensionGroupResponse `json:"addDimensionGroup,omitempty"`
    AddFilterView *AddFilterViewResponse `json:"addFilterView,omitempty"`
    AddNamedRange *AddNamedRangeResponse `json:"addNamedRange,omitempty"`
    AddProtectedRange *AddProtectedRangeResponse `json:"addProtectedRange,omitempty"`
    AddSheet *AddSheetResponse `json:"addSheet,omitempty"`
    AddSlicer *AddSlicerResponse `json:"addSlicer,omitempty"`
    CreateDeveloperMetadata *CreateDeveloperMetadataResponse `json:"createDeveloperMetadata,omitempty"`
    DeleteConditionalFormatRule *DeleteConditionalFormatRuleResponse `json:"deleteConditionalFormatRule,omitempty"`
    DeleteDeveloperMetadata *DeleteDeveloperMetadataResponse `json:"deleteDeveloperMetadata,omitempty"`
    DeleteDimensionGroup *DeleteDimensionGroupResponse `json:"deleteDimensionGroup,omitempty"`
    DeleteDuplicates *DeleteDuplicatesResponse `json:"deleteDuplicates,omitempty"`
    DuplicateFilterView *DuplicateFilterViewResponse `json:"duplicateFilterView,omitempty"`
    DuplicateSheet *DuplicateSheetResponse `json:"duplicateSheet,omitempty"`
    FindReplace *FindReplaceResponse `json:"findReplace,omitempty"`
    RefreshDataSource *RefreshDataSourceResponse `json:"refreshDataSource,omitempty"`
    TrimWhitespace *TrimWhitespaceResponse `json:"trimWhitespace,omitempty"`
    UpdateConditionalFormatRule *UpdateConditionalFormatRuleResponse `json:"updateConditionalFormatRule,omitempty"`
    UpdateDataSource *UpdateDataSourceResponse `json:"updateDataSource,omitempty"`
    UpdateDeveloperMetadata *UpdateDeveloperMetadataResponse `json:"updateDeveloperMetadata,omitempty"`
    UpdateEmbeddedObjectPosition *UpdateEmbeddedObjectPositionResponse `json:"updateEmbeddedObjectPosition,omitempty"`
    
}

