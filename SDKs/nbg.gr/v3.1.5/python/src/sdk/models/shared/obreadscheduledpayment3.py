from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import obreaddatascheduledpayment3
from . import links
from . import meta


@dataclass_json
@dataclass
class ObReadScheduledPayment3:
    data: obreaddatascheduledpayment3.ObReadDataScheduledPayment3 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    links: Optional[links.Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Links' }})
    meta: Optional[meta.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Meta' }})
    
