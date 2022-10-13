from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import geographicdivision
from . import simpleaddresstype
from . import office
from . import official


@dataclass_json
@dataclass
class RepresentativeInfoResponse:
    divisions: Optional[dict[str, geographicdivision.GeographicDivision]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'divisions' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    normalized_input: Optional[simpleaddresstype.SimpleAddressType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'normalizedInput' }})
    offices: Optional[List[office.Office]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offices' }})
    officials: Optional[List[official.Official]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'officials' }})
    
