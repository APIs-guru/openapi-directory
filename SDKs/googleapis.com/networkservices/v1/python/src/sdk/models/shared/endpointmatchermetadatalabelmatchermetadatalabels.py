from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EndpointMatcherMetadataLabelMatcherMetadataLabels:
    label_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelName' }})
    label_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelValue' }})
    
