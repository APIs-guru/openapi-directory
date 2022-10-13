from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import channelmediacontenttype_enum
from . import channelitemsortfield_enum
from . import channelmediatype_enum


@dataclass_json
@dataclass
class ChannelFeatures:
    auto_refresh_levels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoRefreshLevels' }})
    can_filter: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CanFilter' }})
    can_search: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CanSearch' }})
    content_types: Optional[List[channelmediacontenttype_enum.ChannelMediaContentTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentTypes' }})
    default_sort_fields: Optional[List[channelitemsortfield_enum.ChannelItemSortFieldEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultSortFields' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    max_page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxPageSize' }})
    media_types: Optional[List[channelmediatype_enum.ChannelMediaTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MediaTypes' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    supports_content_downloading: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportsContentDownloading' }})
    supports_latest_media: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportsLatestMedia' }})
    supports_sort_order_toggle: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportsSortOrderToggle' }})
    
