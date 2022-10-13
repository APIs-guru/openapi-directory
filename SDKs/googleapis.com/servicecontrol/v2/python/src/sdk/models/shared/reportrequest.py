from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attributecontext


@dataclass_json
@dataclass
class ReportRequest:
    operations: Optional[List[attributecontext.AttributeContext]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operations' }})
    service_config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceConfigId' }})
    
