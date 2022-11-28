from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ErrorTemplate:
    r"""ErrorTemplate
    Error templates for a service descriptor
    """
    
    messages: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    service_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceId') }})
    template40x: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('template40x') }})
    template50x: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('template50x') }})
    template_build: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateBuild') }})
    template_maintenance: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateMaintenance') }})
    
