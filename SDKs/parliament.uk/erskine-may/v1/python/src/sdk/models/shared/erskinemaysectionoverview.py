from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import erskinemaysectionoverview


@dataclass_json
@dataclass
class ErskineMaySectionOverview:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    sub_sections: Optional[List[erskinemaysectionoverview.ErskineMaySectionOverview]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subSections' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    title_chain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'titleChain' }})
    
