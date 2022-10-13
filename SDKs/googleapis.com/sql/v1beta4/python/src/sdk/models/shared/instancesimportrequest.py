from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import importcontext


@dataclass_json
@dataclass
class InstancesImportRequest:
    import_context: Optional[importcontext.ImportContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importContext' }})
    
