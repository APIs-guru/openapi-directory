from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Sheet:
    r"""Sheet
    A sheet in a spreadsheet.
    """
    
    banded_ranges: Optional[List[BandedRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandedRanges') }})
    basic_filter: Optional[BasicFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicFilter') }})
    charts: Optional[List[EmbeddedChart]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('charts') }})
    column_groups: Optional[List[DimensionGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnGroups') }})
    conditional_formats: Optional[List[ConditionalFormatRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditionalFormats') }})
    data: Optional[List[GridData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    developer_metadata: Optional[List[DeveloperMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerMetadata') }})
    filter_views: Optional[List[FilterView]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterViews') }})
    merges: Optional[List[GridRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merges') }})
    properties: Optional[SheetProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    protected_ranges: Optional[List[ProtectedRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protectedRanges') }})
    row_groups: Optional[List[DimensionGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowGroups') }})
    slicers: Optional[List[Slicer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slicers') }})
    
