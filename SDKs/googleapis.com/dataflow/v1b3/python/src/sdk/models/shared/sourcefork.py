from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sourcesplitshard
from . import derivedsource
from . import sourcesplitshard
from . import derivedsource


@dataclass_json
@dataclass
class SourceFork:
    primary: Optional[sourcesplitshard.SourceSplitShard] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary' }})
    primary_source: Optional[derivedsource.DerivedSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primarySource' }})
    residual: Optional[sourcesplitshard.SourceSplitShard] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'residual' }})
    residual_source: Optional[derivedsource.DerivedSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'residualSource' }})
    
