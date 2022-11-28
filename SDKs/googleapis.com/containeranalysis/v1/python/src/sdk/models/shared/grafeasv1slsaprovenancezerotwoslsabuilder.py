from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder:
    r"""GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder
    Identifies the entity that executed the recipe, which is trusted to have correctly performed the operation and populated this provenance.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
