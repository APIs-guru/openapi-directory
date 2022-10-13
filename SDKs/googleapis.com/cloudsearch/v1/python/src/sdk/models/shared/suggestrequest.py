from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datasourcerestriction
from . import requestoptions


@dataclass_json
@dataclass
class SuggestRequest:
    data_source_restrictions: Optional[List[datasourcerestriction.DataSourceRestriction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceRestrictions' }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    request_options: Optional[requestoptions.RequestOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestOptions' }})
    
