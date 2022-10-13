from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import obreaddatabalance1
from . import links
from . import meta


@dataclass_json
@dataclass
class ObReadBalance1:
    data: obreaddatabalance1.ObReadDataBalance1 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    links: links.Links = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Links' }})
    meta: meta.Meta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Meta' }})
    
