from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import lighthousecategoryv5
from . import lighthousecategoryv5
from . import lighthousecategoryv5
from . import lighthousecategoryv5
from . import lighthousecategoryv5


@dataclass_json
@dataclass
class Categories:
    accessibility: Optional[lighthousecategoryv5.LighthouseCategoryV5] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessibility' }})
    best_practices: Optional[lighthousecategoryv5.LighthouseCategoryV5] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'best-practices' }})
    performance: Optional[lighthousecategoryv5.LighthouseCategoryV5] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'performance' }})
    pwa: Optional[lighthousecategoryv5.LighthouseCategoryV5] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pwa' }})
    seo: Optional[lighthousecategoryv5.LighthouseCategoryV5] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seo' }})
    
