from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datasourcecolumnreference
from . import developermetadata


@dataclass_json
@dataclass
class DimensionProperties:
    data_source_column_reference: Optional[datasourcecolumnreference.DataSourceColumnReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceColumnReference' }})
    developer_metadata: Optional[List[developermetadata.DeveloperMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'developerMetadata' }})
    hidden_by_filter: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hiddenByFilter' }})
    hidden_by_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hiddenByUser' }})
    pixel_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pixelSize' }})
    
