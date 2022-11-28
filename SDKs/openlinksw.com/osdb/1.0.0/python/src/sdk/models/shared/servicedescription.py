from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ServiceDescription:
    import_source_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('import_source_uri') }})
    service_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_id') }})
    service_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_name') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
