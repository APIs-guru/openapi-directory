from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import geographicdivision
from . import office
from . import official


@dataclass_json
@dataclass
class RepresentativeInfoData:
    divisions: Optional[dict[str, geographicdivision.GeographicDivision]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'divisions' }})
    offices: Optional[List[office.Office]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offices' }})
    officials: Optional[List[official.Official]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'officials' }})
    
