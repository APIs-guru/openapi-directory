from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Registrierkasse:
    benutzerschluessel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Benutzerschluessel') }})
    kassen_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Kassen-ID') }})
    signaturerstellungseinheit_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Signaturerstellungseinheit-UUID') }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_href') }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_uuid') }})
    
