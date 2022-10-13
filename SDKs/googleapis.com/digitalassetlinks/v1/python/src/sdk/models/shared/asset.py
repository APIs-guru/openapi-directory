from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import androidappasset
from . import webasset


@dataclass_json
@dataclass
class Asset:
    android_app: Optional[androidappasset.AndroidAppAsset] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidApp' }})
    web: Optional[webasset.WebAsset] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'web' }})
    
