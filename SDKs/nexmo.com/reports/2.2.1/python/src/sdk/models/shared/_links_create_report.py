from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LinksCreateReportSelf:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class LinksCreateReport:
    self: Optional[LinksCreateReportSelf] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    
