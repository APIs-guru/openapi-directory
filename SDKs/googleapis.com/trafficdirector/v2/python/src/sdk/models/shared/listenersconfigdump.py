from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListenersConfigDump:
    r"""ListenersConfigDump
    Envoy's listener manager fills this message with all currently known listeners. Listener configuration information can be used to recreate an Envoy configuration by populating all listeners as static listeners or by returning them in a LDS response.
    """
    
    dynamic_listeners: Optional[List[DynamicListener]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicListeners') }})
    static_listeners: Optional[List[StaticListener]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('staticListeners') }})
    version_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionInfo') }})
    
