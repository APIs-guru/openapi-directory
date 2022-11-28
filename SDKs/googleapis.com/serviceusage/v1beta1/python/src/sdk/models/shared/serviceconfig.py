from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServiceConfig:
    r"""ServiceConfig
    The configuration of the service.
    """
    
    apis: Optional[List[API]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apis') }})
    authentication: Optional[Authentication] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication') }})
    documentation: Optional[Documentation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation') }})
    endpoints: Optional[List[Endpoint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoints') }})
    monitored_resources: Optional[List[MonitoredResourceDescriptor]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoredResources') }})
    monitoring: Optional[Monitoring] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoring') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    quota: Optional[Quota] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quota') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    usage: Optional[Usage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage') }})
    
