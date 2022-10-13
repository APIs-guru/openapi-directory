from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import addbandingrequest
from . import addchartrequest
from . import addconditionalformatrulerequest
from . import adddatasourcerequest
from . import adddimensiongrouprequest
from . import addfilterviewrequest
from . import addnamedrangerequest
from . import addprotectedrangerequest
from . import addsheetrequest
from . import addslicerrequest
from . import appendcellsrequest
from . import appenddimensionrequest
from . import autofillrequest
from . import autoresizedimensionsrequest
from . import clearbasicfilterrequest
from . import copypasterequest
from . import createdevelopermetadatarequest
from . import cutpasterequest
from . import deletebandingrequest
from . import deleteconditionalformatrulerequest
from . import deletedatasourcerequest
from . import deletedevelopermetadatarequest
from . import deletedimensionrequest
from . import deletedimensiongrouprequest
from . import deleteduplicatesrequest
from . import deleteembeddedobjectrequest
from . import deletefilterviewrequest
from . import deletenamedrangerequest
from . import deleteprotectedrangerequest
from . import deleterangerequest
from . import deletesheetrequest
from . import duplicatefilterviewrequest
from . import duplicatesheetrequest
from . import findreplacerequest
from . import insertdimensionrequest
from . import insertrangerequest
from . import mergecellsrequest
from . import movedimensionrequest
from . import pastedatarequest
from . import randomizerangerequest
from . import refreshdatasourcerequest
from . import repeatcellrequest
from . import setbasicfilterrequest
from . import setdatavalidationrequest
from . import sortrangerequest
from . import texttocolumnsrequest
from . import trimwhitespacerequest
from . import unmergecellsrequest
from . import updatebandingrequest
from . import updatebordersrequest
from . import updatecellsrequest
from . import updatechartspecrequest
from . import updateconditionalformatrulerequest
from . import updatedatasourcerequest
from . import updatedevelopermetadatarequest
from . import updatedimensiongrouprequest
from . import updatedimensionpropertiesrequest
from . import updateembeddedobjectborderrequest
from . import updateembeddedobjectpositionrequest
from . import updatefilterviewrequest
from . import updatenamedrangerequest
from . import updateprotectedrangerequest
from . import updatesheetpropertiesrequest
from . import updateslicerspecrequest
from . import updatespreadsheetpropertiesrequest


@dataclass_json
@dataclass
class Request:
    add_banding: Optional[addbandingrequest.AddBandingRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addBanding' }})
    add_chart: Optional[addchartrequest.AddChartRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addChart' }})
    add_conditional_format_rule: Optional[addconditionalformatrulerequest.AddConditionalFormatRuleRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addConditionalFormatRule' }})
    add_data_source: Optional[adddatasourcerequest.AddDataSourceRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addDataSource' }})
    add_dimension_group: Optional[adddimensiongrouprequest.AddDimensionGroupRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addDimensionGroup' }})
    add_filter_view: Optional[addfilterviewrequest.AddFilterViewRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addFilterView' }})
    add_named_range: Optional[addnamedrangerequest.AddNamedRangeRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addNamedRange' }})
    add_protected_range: Optional[addprotectedrangerequest.AddProtectedRangeRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addProtectedRange' }})
    add_sheet: Optional[addsheetrequest.AddSheetRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addSheet' }})
    add_slicer: Optional[addslicerrequest.AddSlicerRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addSlicer' }})
    append_cells: Optional[appendcellsrequest.AppendCellsRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appendCells' }})
    append_dimension: Optional[appenddimensionrequest.AppendDimensionRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appendDimension' }})
    auto_fill: Optional[autofillrequest.AutoFillRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoFill' }})
    auto_resize_dimensions: Optional[autoresizedimensionsrequest.AutoResizeDimensionsRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoResizeDimensions' }})
    clear_basic_filter: Optional[clearbasicfilterrequest.ClearBasicFilterRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clearBasicFilter' }})
    copy_paste: Optional[copypasterequest.CopyPasteRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyPaste' }})
    create_developer_metadata: Optional[createdevelopermetadatarequest.CreateDeveloperMetadataRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createDeveloperMetadata' }})
    cut_paste: Optional[cutpasterequest.CutPasteRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cutPaste' }})
    delete_banding: Optional[deletebandingrequest.DeleteBandingRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteBanding' }})
    delete_conditional_format_rule: Optional[deleteconditionalformatrulerequest.DeleteConditionalFormatRuleRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteConditionalFormatRule' }})
    delete_data_source: Optional[deletedatasourcerequest.DeleteDataSourceRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteDataSource' }})
    delete_developer_metadata: Optional[deletedevelopermetadatarequest.DeleteDeveloperMetadataRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteDeveloperMetadata' }})
    delete_dimension: Optional[deletedimensionrequest.DeleteDimensionRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteDimension' }})
    delete_dimension_group: Optional[deletedimensiongrouprequest.DeleteDimensionGroupRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteDimensionGroup' }})
    delete_duplicates: Optional[deleteduplicatesrequest.DeleteDuplicatesRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteDuplicates' }})
    delete_embedded_object: Optional[deleteembeddedobjectrequest.DeleteEmbeddedObjectRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteEmbeddedObject' }})
    delete_filter_view: Optional[deletefilterviewrequest.DeleteFilterViewRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteFilterView' }})
    delete_named_range: Optional[deletenamedrangerequest.DeleteNamedRangeRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteNamedRange' }})
    delete_protected_range: Optional[deleteprotectedrangerequest.DeleteProtectedRangeRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteProtectedRange' }})
    delete_range: Optional[deleterangerequest.DeleteRangeRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteRange' }})
    delete_sheet: Optional[deletesheetrequest.DeleteSheetRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteSheet' }})
    duplicate_filter_view: Optional[duplicatefilterviewrequest.DuplicateFilterViewRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duplicateFilterView' }})
    duplicate_sheet: Optional[duplicatesheetrequest.DuplicateSheetRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duplicateSheet' }})
    find_replace: Optional[findreplacerequest.FindReplaceRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findReplace' }})
    insert_dimension: Optional[insertdimensionrequest.InsertDimensionRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertDimension' }})
    insert_range: Optional[insertrangerequest.InsertRangeRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertRange' }})
    merge_cells: Optional[mergecellsrequest.MergeCellsRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mergeCells' }})
    move_dimension: Optional[movedimensionrequest.MoveDimensionRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moveDimension' }})
    paste_data: Optional[pastedatarequest.PasteDataRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pasteData' }})
    randomize_range: Optional[randomizerangerequest.RandomizeRangeRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'randomizeRange' }})
    refresh_data_source: Optional[refreshdatasourcerequest.RefreshDataSourceRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refreshDataSource' }})
    repeat_cell: Optional[repeatcellrequest.RepeatCellRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repeatCell' }})
    set_basic_filter: Optional[setbasicfilterrequest.SetBasicFilterRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setBasicFilter' }})
    set_data_validation: Optional[setdatavalidationrequest.SetDataValidationRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setDataValidation' }})
    sort_range: Optional[sortrangerequest.SortRangeRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortRange' }})
    text_to_columns: Optional[texttocolumnsrequest.TextToColumnsRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textToColumns' }})
    trim_whitespace: Optional[trimwhitespacerequest.TrimWhitespaceRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trimWhitespace' }})
    unmerge_cells: Optional[unmergecellsrequest.UnmergeCellsRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unmergeCells' }})
    update_banding: Optional[updatebandingrequest.UpdateBandingRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateBanding' }})
    update_borders: Optional[updatebordersrequest.UpdateBordersRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateBorders' }})
    update_cells: Optional[updatecellsrequest.UpdateCellsRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateCells' }})
    update_chart_spec: Optional[updatechartspecrequest.UpdateChartSpecRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateChartSpec' }})
    update_conditional_format_rule: Optional[updateconditionalformatrulerequest.UpdateConditionalFormatRuleRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateConditionalFormatRule' }})
    update_data_source: Optional[updatedatasourcerequest.UpdateDataSourceRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateDataSource' }})
    update_developer_metadata: Optional[updatedevelopermetadatarequest.UpdateDeveloperMetadataRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateDeveloperMetadata' }})
    update_dimension_group: Optional[updatedimensiongrouprequest.UpdateDimensionGroupRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateDimensionGroup' }})
    update_dimension_properties: Optional[updatedimensionpropertiesrequest.UpdateDimensionPropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateDimensionProperties' }})
    update_embedded_object_border: Optional[updateembeddedobjectborderrequest.UpdateEmbeddedObjectBorderRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateEmbeddedObjectBorder' }})
    update_embedded_object_position: Optional[updateembeddedobjectpositionrequest.UpdateEmbeddedObjectPositionRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateEmbeddedObjectPosition' }})
    update_filter_view: Optional[updatefilterviewrequest.UpdateFilterViewRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateFilterView' }})
    update_named_range: Optional[updatenamedrangerequest.UpdateNamedRangeRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateNamedRange' }})
    update_protected_range: Optional[updateprotectedrangerequest.UpdateProtectedRangeRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateProtectedRange' }})
    update_sheet_properties: Optional[updatesheetpropertiesrequest.UpdateSheetPropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateSheetProperties' }})
    update_slicer_spec: Optional[updateslicerspecrequest.UpdateSlicerSpecRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateSlicerSpec' }})
    update_spreadsheet_properties: Optional[updatespreadsheetpropertiesrequest.UpdateSpreadsheetPropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateSpreadsheetProperties' }})
    
