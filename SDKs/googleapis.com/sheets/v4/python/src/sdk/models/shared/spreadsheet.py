from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datasourcerefreshschedule
from . import datasource
from . import developermetadata
from . import namedrange
from . import spreadsheetproperties
from . import sheet


@dataclass_json
@dataclass
class Spreadsheet:
    data_source_schedules: Optional[List[datasourcerefreshschedule.DataSourceRefreshSchedule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceSchedules' }})
    data_sources: Optional[List[datasource.DataSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSources' }})
    developer_metadata: Optional[List[developermetadata.DeveloperMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'developerMetadata' }})
    named_ranges: Optional[List[namedrange.NamedRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namedRanges' }})
    properties: Optional[spreadsheetproperties.SpreadsheetProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    sheets: Optional[List[sheet.Sheet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sheets' }})
    spreadsheet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spreadsheetId' }})
    spreadsheet_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spreadsheetUrl' }})
    
