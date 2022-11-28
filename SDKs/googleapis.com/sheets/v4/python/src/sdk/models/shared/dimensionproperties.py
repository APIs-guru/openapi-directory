from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DimensionProperties:
    r"""DimensionProperties
    Properties about a dimension.
    """
    
    data_source_column_reference: Optional[DataSourceColumnReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceColumnReference') }})
    developer_metadata: Optional[List[DeveloperMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerMetadata') }})
    hidden_by_filter: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiddenByFilter') }})
    hidden_by_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiddenByUser') }})
    pixel_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pixelSize') }})
    
