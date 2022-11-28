from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Request:
    r"""Request
    A single kind of update to apply to a spreadsheet.
    """
    
    add_banding: Optional[AddBandingRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addBanding') }})
    add_chart: Optional[AddChartRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addChart') }})
    add_conditional_format_rule: Optional[AddConditionalFormatRuleRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addConditionalFormatRule') }})
    add_data_source: Optional[AddDataSourceRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addDataSource') }})
    add_dimension_group: Optional[AddDimensionGroupRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addDimensionGroup') }})
    add_filter_view: Optional[AddFilterViewRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addFilterView') }})
    add_named_range: Optional[AddNamedRangeRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addNamedRange') }})
    add_protected_range: Optional[AddProtectedRangeRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addProtectedRange') }})
    add_sheet: Optional[AddSheetRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addSheet') }})
    add_slicer: Optional[AddSlicerRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addSlicer') }})
    append_cells: Optional[AppendCellsRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appendCells') }})
    append_dimension: Optional[AppendDimensionRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appendDimension') }})
    auto_fill: Optional[AutoFillRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoFill') }})
    auto_resize_dimensions: Optional[AutoResizeDimensionsRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoResizeDimensions') }})
    clear_basic_filter: Optional[ClearBasicFilterRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clearBasicFilter') }})
    copy_paste: Optional[CopyPasteRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyPaste') }})
    create_developer_metadata: Optional[CreateDeveloperMetadataRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createDeveloperMetadata') }})
    cut_paste: Optional[CutPasteRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cutPaste') }})
    delete_banding: Optional[DeleteBandingRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteBanding') }})
    delete_conditional_format_rule: Optional[DeleteConditionalFormatRuleRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteConditionalFormatRule') }})
    delete_data_source: Optional[DeleteDataSourceRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteDataSource') }})
    delete_developer_metadata: Optional[DeleteDeveloperMetadataRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteDeveloperMetadata') }})
    delete_dimension: Optional[DeleteDimensionRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteDimension') }})
    delete_dimension_group: Optional[DeleteDimensionGroupRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteDimensionGroup') }})
    delete_duplicates: Optional[DeleteDuplicatesRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteDuplicates') }})
    delete_embedded_object: Optional[DeleteEmbeddedObjectRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteEmbeddedObject') }})
    delete_filter_view: Optional[DeleteFilterViewRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteFilterView') }})
    delete_named_range: Optional[DeleteNamedRangeRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteNamedRange') }})
    delete_protected_range: Optional[DeleteProtectedRangeRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteProtectedRange') }})
    delete_range: Optional[DeleteRangeRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteRange') }})
    delete_sheet: Optional[DeleteSheetRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteSheet') }})
    duplicate_filter_view: Optional[DuplicateFilterViewRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicateFilterView') }})
    duplicate_sheet: Optional[DuplicateSheetRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicateSheet') }})
    find_replace: Optional[FindReplaceRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findReplace') }})
    insert_dimension: Optional[InsertDimensionRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertDimension') }})
    insert_range: Optional[InsertRangeRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertRange') }})
    merge_cells: Optional[MergeCellsRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeCells') }})
    move_dimension: Optional[MoveDimensionRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moveDimension') }})
    paste_data: Optional[PasteDataRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pasteData') }})
    randomize_range: Optional[RandomizeRangeRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('randomizeRange') }})
    refresh_data_source: Optional[RefreshDataSourceRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refreshDataSource') }})
    repeat_cell: Optional[RepeatCellRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeatCell') }})
    set_basic_filter: Optional[SetBasicFilterRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setBasicFilter') }})
    set_data_validation: Optional[SetDataValidationRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setDataValidation') }})
    sort_range: Optional[SortRangeRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortRange') }})
    text_to_columns: Optional[TextToColumnsRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textToColumns') }})
    trim_whitespace: Optional[TrimWhitespaceRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trimWhitespace') }})
    unmerge_cells: Optional[UnmergeCellsRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unmergeCells') }})
    update_banding: Optional[UpdateBandingRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateBanding') }})
    update_borders: Optional[UpdateBordersRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateBorders') }})
    update_cells: Optional[UpdateCellsRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateCells') }})
    update_chart_spec: Optional[UpdateChartSpecRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateChartSpec') }})
    update_conditional_format_rule: Optional[UpdateConditionalFormatRuleRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateConditionalFormatRule') }})
    update_data_source: Optional[UpdateDataSourceRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateDataSource') }})
    update_developer_metadata: Optional[UpdateDeveloperMetadataRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateDeveloperMetadata') }})
    update_dimension_group: Optional[UpdateDimensionGroupRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateDimensionGroup') }})
    update_dimension_properties: Optional[UpdateDimensionPropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateDimensionProperties') }})
    update_embedded_object_border: Optional[UpdateEmbeddedObjectBorderRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateEmbeddedObjectBorder') }})
    update_embedded_object_position: Optional[UpdateEmbeddedObjectPositionRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateEmbeddedObjectPosition') }})
    update_filter_view: Optional[UpdateFilterViewRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateFilterView') }})
    update_named_range: Optional[UpdateNamedRangeRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateNamedRange') }})
    update_protected_range: Optional[UpdateProtectedRangeRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateProtectedRange') }})
    update_sheet_properties: Optional[UpdateSheetPropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateSheetProperties') }})
    update_slicer_spec: Optional[UpdateSlicerSpecRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateSlicerSpec') }})
    update_spreadsheet_properties: Optional[UpdateSpreadsheetPropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateSpreadsheetProperties') }})
    
