from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cloudrunrewrite


@dataclass_json
@dataclass
class Rewrite:
    dynamic_links: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamicLinks' }})
    function: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'function' }})
    function_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'functionRegion' }})
    glob: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'glob' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regex' }})
    run: Optional[cloudrunrewrite.CloudRunRewrite] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'run' }})
    
