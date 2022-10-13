from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import livetvservicestatus_enum


@dataclass_json
@dataclass
class LiveTvServiceInfo:
    has_update_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HasUpdateAvailable' }})
    home_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HomePageUrl' }})
    is_visible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsVisible' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    status: Optional[livetvservicestatus_enum.LiveTvServiceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusMessage' }})
    tuners: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tuners' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
