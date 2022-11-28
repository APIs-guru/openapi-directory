from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListDataPointChangesResponse:
    data_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceId') }})
    deleted_data_point: Optional[List[DataPoint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletedDataPoint') }})
    inserted_data_point: Optional[List[DataPoint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertedDataPoint') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
