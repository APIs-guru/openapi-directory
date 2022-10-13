from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import obbeneficiary5
from . import links
from . import meta


@dataclass_json
@dataclass
class ObReadBeneficiary5Data:
    beneficiary: Optional[List[obbeneficiary5.ObBeneficiary5]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Beneficiary' }})
    

@dataclass_json
@dataclass
class ObReadBeneficiary5:
    data: ObReadBeneficiary5Data = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    links: Optional[links.Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Links' }})
    meta: Optional[meta.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Meta' }})
    
