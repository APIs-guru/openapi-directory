from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datafilter


@dataclass_json
@dataclass
class DeleteDeveloperMetadataRequest:
    data_filter: Optional[datafilter.DataFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataFilter' }})
    
