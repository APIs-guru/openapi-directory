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
class Response:
    r"""Response
    A single response from an update.
    """
    
    add_banding: Optional[AddBandingResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addBanding') }})
    add_chart: Optional[AddChartResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addChart') }})
    add_data_source: Optional[AddDataSourceResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addDataSource') }})
    add_dimension_group: Optional[AddDimensionGroupResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addDimensionGroup') }})
    add_filter_view: Optional[AddFilterViewResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addFilterView') }})
    add_named_range: Optional[AddNamedRangeResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addNamedRange') }})
    add_protected_range: Optional[AddProtectedRangeResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addProtectedRange') }})
    add_sheet: Optional[AddSheetResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addSheet') }})
    add_slicer: Optional[AddSlicerResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addSlicer') }})
    create_developer_metadata: Optional[CreateDeveloperMetadataResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createDeveloperMetadata') }})
    delete_conditional_format_rule: Optional[DeleteConditionalFormatRuleResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteConditionalFormatRule') }})
    delete_developer_metadata: Optional[DeleteDeveloperMetadataResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteDeveloperMetadata') }})
    delete_dimension_group: Optional[DeleteDimensionGroupResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteDimensionGroup') }})
    delete_duplicates: Optional[DeleteDuplicatesResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteDuplicates') }})
    duplicate_filter_view: Optional[DuplicateFilterViewResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicateFilterView') }})
    duplicate_sheet: Optional[DuplicateSheetResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicateSheet') }})
    find_replace: Optional[FindReplaceResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findReplace') }})
    refresh_data_source: Optional[RefreshDataSourceResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refreshDataSource') }})
    trim_whitespace: Optional[TrimWhitespaceResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trimWhitespace') }})
    update_conditional_format_rule: Optional[UpdateConditionalFormatRuleResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateConditionalFormatRule') }})
    update_data_source: Optional[UpdateDataSourceResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateDataSource') }})
    update_developer_metadata: Optional[UpdateDeveloperMetadataResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateDeveloperMetadata') }})
    update_embedded_object_position: Optional[UpdateEmbeddedObjectPositionResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateEmbeddedObjectPosition') }})
    
