from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BelegeBelegeGruppe:
    belege_kompakt: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Belege-kompakt') }})
    signaturzertifikat: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Signaturzertifikat') }})
    zertifizierungsstellen: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Zertifizierungsstellen') }})
    

@dataclass_json
@dataclass
class Belege:
    belege: Optional[List[Beleg]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Belege') }})
    belege_gruppe: Optional[List[BelegeBelegeGruppe]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Belege-Gruppe') }})
    
