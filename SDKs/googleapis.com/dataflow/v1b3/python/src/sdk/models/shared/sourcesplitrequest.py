from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sourcesplitoptions
from . import source


@dataclass_json
@dataclass
class SourceSplitRequest:
    options: Optional[sourcesplitoptions.SourceSplitOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    source: Optional[source.Source] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
