from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import intotoprovenance
from . import slsaprovenance
from . import slsaprovenancezerotwo
from . import subject


@dataclass_json
@dataclass
class InTotoStatement:
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_type' }})
    predicate_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predicateType' }})
    provenance: Optional[intotoprovenance.InTotoProvenance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provenance' }})
    slsa_provenance: Optional[slsaprovenance.SlsaProvenance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slsaProvenance' }})
    slsa_provenance_zero_two: Optional[slsaprovenancezerotwo.SlsaProvenanceZeroTwo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slsaProvenanceZeroTwo' }})
    subject: Optional[List[subject.Subject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subject' }})
    
