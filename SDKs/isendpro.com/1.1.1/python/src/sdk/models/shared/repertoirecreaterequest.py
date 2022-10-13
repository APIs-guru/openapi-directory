from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class RepertoirEcreaterequestRepertoireEditEnum(str, Enum):
    CREATE = "create"


@dataclass_json
@dataclass
class RepertoirEcreaterequest:
    keyid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyid' }})
    repertoire_edit: RepertoirEcreaterequestRepertoireEditEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repertoireEdit' }})
    repertoire_nom: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repertoireNom' }})
    
