from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import grafeasv1slsaprovenancezerotwoslsabuilder
from . import grafeasv1slsaprovenancezerotwoslsainvocation
from . import grafeasv1slsaprovenancezerotwoslsamaterial
from . import grafeasv1slsaprovenancezerotwoslsametadata


@dataclass_json
@dataclass
class SlsaProvenanceZeroTwo:
    build_config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildConfig' }})
    build_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildType' }})
    builder: Optional[grafeasv1slsaprovenancezerotwoslsabuilder.GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'builder' }})
    invocation: Optional[grafeasv1slsaprovenancezerotwoslsainvocation.GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invocation' }})
    materials: Optional[List[grafeasv1slsaprovenancezerotwoslsamaterial.GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'materials' }})
    metadata: Optional[grafeasv1slsaprovenancezerotwoslsametadata.GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    
