from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import administrativebody
from . import administrationregion
from . import source


@dataclass_json
@dataclass
class AdministrationRegion:
    election_administration_body: Optional[administrativebody.AdministrativeBody] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'electionAdministrationBody' }})
    local_jurisdiction: Optional[administrationregion.AdministrationRegion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'local_jurisdiction' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    sources: Optional[List[source.Source]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sources' }})
    
