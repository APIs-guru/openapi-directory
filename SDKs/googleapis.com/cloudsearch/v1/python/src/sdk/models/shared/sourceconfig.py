from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sourcecrowdingconfig
from . import sourcescoringconfig
from . import source


@dataclass_json
@dataclass
class SourceConfig:
    crowding_config: Optional[sourcecrowdingconfig.SourceCrowdingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crowdingConfig' }})
    scoring_config: Optional[sourcescoringconfig.SourceScoringConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scoringConfig' }})
    source: Optional[source.Source] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
