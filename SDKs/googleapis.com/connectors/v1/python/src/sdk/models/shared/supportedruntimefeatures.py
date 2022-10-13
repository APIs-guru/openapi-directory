from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SupportedRuntimeFeatures:
    action_apis: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionApis' }})
    entity_apis: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityApis' }})
    sql_query: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sqlQuery' }})
    
