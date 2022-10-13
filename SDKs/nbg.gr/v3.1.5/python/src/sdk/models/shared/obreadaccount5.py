from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import obreaddataaccount5
from . import links
from . import meta


@dataclass_json
@dataclass
class ObReadAccount5:
    data: obreaddataaccount5.ObReadDataAccount5 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    links: Optional[links.Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Links' }})
    meta: Optional[meta.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Meta' }})
    
