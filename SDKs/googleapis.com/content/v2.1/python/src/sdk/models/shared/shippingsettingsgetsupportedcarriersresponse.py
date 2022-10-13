from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import carrierscarrier


@dataclass_json
@dataclass
class ShippingsettingsGetSupportedCarriersResponse:
    carriers: Optional[List[carrierscarrier.CarriersCarrier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carriers' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
