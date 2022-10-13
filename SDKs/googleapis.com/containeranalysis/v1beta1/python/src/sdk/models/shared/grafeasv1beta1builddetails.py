from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import buildprovenance


@dataclass_json
@dataclass
class GrafeasV1beta1BuildDetails:
    provenance: Optional[buildprovenance.BuildProvenance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provenance' }})
    provenance_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provenanceBytes' }})
    
