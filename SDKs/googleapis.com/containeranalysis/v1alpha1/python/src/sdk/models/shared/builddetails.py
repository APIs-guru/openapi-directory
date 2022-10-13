from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import intotoprovenance
from . import intotostatement
from . import buildprovenance


@dataclass_json
@dataclass
class BuildDetails:
    intoto_provenance: Optional[intotoprovenance.InTotoProvenance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intotoProvenance' }})
    intoto_statement: Optional[intotostatement.InTotoStatement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intotoStatement' }})
    provenance: Optional[buildprovenance.BuildProvenance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provenance' }})
    provenance_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provenanceBytes' }})
    
