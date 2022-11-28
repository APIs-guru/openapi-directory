from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ChannelFeatures:
    auto_refresh_levels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoRefreshLevels') }})
    can_filter: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CanFilter') }})
    can_search: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CanSearch') }})
    content_types: Optional[List[ChannelMediaContentTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentTypes') }})
    default_sort_fields: Optional[List[ChannelItemSortFieldEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultSortFields') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    max_page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxPageSize') }})
    media_types: Optional[List[ChannelMediaTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediaTypes') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    supports_content_downloading: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportsContentDownloading') }})
    supports_latest_media: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportsLatestMedia') }})
    supports_sort_order_toggle: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportsSortOrderToggle') }})
    
