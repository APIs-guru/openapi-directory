from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import scrolldirection_enum
from . import sortorder_enum


@dataclass_json
@dataclass
class DisplayPreferencesDto:
    client: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Client' }})
    custom_prefs: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomPrefs' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    index_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexBy' }})
    primary_image_height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrimaryImageHeight' }})
    primary_image_width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrimaryImageWidth' }})
    remember_indexing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RememberIndexing' }})
    remember_sorting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RememberSorting' }})
    scroll_direction: Optional[scrolldirection_enum.ScrollDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScrollDirection' }})
    show_backdrop: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShowBackdrop' }})
    show_sidebar: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShowSidebar' }})
    sort_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortBy' }})
    sort_order: Optional[sortorder_enum.SortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortOrder' }})
    view_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ViewType' }})
    
