from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DisplayPreferencesDto:
    r"""DisplayPreferencesDto
    Defines the display preferences for any item that supports them (usually Folders).
    """
    
    client: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Client') }})
    custom_prefs: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomPrefs') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    index_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexBy') }})
    primary_image_height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrimaryImageHeight') }})
    primary_image_width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrimaryImageWidth') }})
    remember_indexing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RememberIndexing') }})
    remember_sorting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RememberSorting') }})
    scroll_direction: Optional[ScrollDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScrollDirection') }})
    show_backdrop: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShowBackdrop') }})
    show_sidebar: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShowSidebar') }})
    sort_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SortBy') }})
    sort_order: Optional[SortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SortOrder') }})
    view_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViewType') }})
    
