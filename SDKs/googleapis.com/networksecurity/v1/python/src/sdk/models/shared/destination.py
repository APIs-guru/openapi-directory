from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import httpheadermatch


@dataclass_json
@dataclass
class Destination:
    hosts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hosts' }})
    http_header_match: Optional[httpheadermatch.HTTPHeaderMatch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpHeaderMatch' }})
    methods: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'methods' }})
    ports: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ports' }})
    
