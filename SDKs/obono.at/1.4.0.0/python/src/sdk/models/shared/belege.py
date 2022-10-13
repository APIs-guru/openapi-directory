from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import beleg


@dataclass_json
@dataclass
class BelegeBelegeGruppe:
    belege_kompakt: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Belege-kompakt' }})
    signaturzertifikat: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Signaturzertifikat' }})
    zertifizierungsstellen: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Zertifizierungsstellen' }})
    

@dataclass_json
@dataclass
class Belege:
    belege: Optional[List[beleg.Beleg]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Belege' }})
    belege_gruppe: Optional[List[BelegeBelegeGruppe]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Belege-Gruppe' }})
    
