from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import record
from . import urlnormalization


@dataclass_json
@dataclass
class QueryResponse:
    record: Optional[record.Record] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'record' }})
    url_normalization_details: Optional[urlnormalization.URLNormalization] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlNormalizationDetails' }})
    
