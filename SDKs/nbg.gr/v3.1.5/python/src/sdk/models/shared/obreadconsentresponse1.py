from dataclasses import dataclass, field
from typing import Any
from dataclasses_json import dataclass_json
from . import obreaddataconsentresponse1
from . import links
from . import meta


@dataclass_json
@dataclass
class ObReadConsentResponse1:
    data: obreaddataconsentresponse1.ObReadDataConsentResponse1 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    links: links.Links = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Links' }})
    meta: meta.Meta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Meta' }})
    risk: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Risk' }})
    
