from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import grafeasv1slsaprovenancezerotwoslsaconfigsource


@dataclass_json
@dataclass
class GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation:
    config_source: Optional[grafeasv1slsaprovenancezerotwoslsaconfigsource.GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configSource' }})
    environment: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    
