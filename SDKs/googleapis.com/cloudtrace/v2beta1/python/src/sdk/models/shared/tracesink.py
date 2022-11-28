from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TraceSink:
    r"""TraceSink
    Describes a sink used to export traces to a BigQuery dataset. The sink must be created within a project.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    output_config: Optional[OutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputConfig') }})
    writer_identity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writerIdentity') }})
    

@dataclass_json
@dataclass
class TraceSinkInput:
    r"""TraceSinkInput
    Describes a sink used to export traces to a BigQuery dataset. The sink must be created within a project.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    output_config: Optional[OutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputConfig') }})
    
