from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import obreaddatastatement2
from . import links
from . import meta


@dataclass_json
@dataclass
class ObReadStatement2:
    data: obreaddatastatement2.ObReadDataStatement2 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    links: Optional[links.Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Links' }})
    meta: Optional[meta.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Meta' }})
    
