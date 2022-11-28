from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SpreadsheetInput:
    r"""SpreadsheetInput
    Resource that represents a spreadsheet.
    """
    
    data_sources: Optional[List[DataSource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSources') }})
    developer_metadata: Optional[List[DeveloperMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerMetadata') }})
    named_ranges: Optional[List[NamedRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namedRanges') }})
    properties: Optional[SpreadsheetProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    sheets: Optional[List[Sheet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sheets') }})
    spreadsheet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spreadsheetId') }})
    spreadsheet_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spreadsheetUrl') }})
    

@dataclass_json
@dataclass
class Spreadsheet:
    r"""Spreadsheet
    Resource that represents a spreadsheet.
    """
    
    data_source_schedules: Optional[List[DataSourceRefreshSchedule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceSchedules') }})
    data_sources: Optional[List[DataSource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSources') }})
    developer_metadata: Optional[List[DeveloperMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerMetadata') }})
    named_ranges: Optional[List[NamedRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namedRanges') }})
    properties: Optional[SpreadsheetProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    sheets: Optional[List[Sheet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sheets') }})
    spreadsheet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spreadsheetId') }})
    spreadsheet_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spreadsheetUrl') }})
    
