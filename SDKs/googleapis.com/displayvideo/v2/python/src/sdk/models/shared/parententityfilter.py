from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class ParentEntityFilterFileTypeEnum(str, Enum):
    FILE_TYPE_UNSPECIFIED = "FILE_TYPE_UNSPECIFIED"
    FILE_TYPE_CAMPAIGN = "FILE_TYPE_CAMPAIGN"
    FILE_TYPE_MEDIA_PRODUCT = "FILE_TYPE_MEDIA_PRODUCT"
    FILE_TYPE_INSERTION_ORDER = "FILE_TYPE_INSERTION_ORDER"
    FILE_TYPE_LINE_ITEM = "FILE_TYPE_LINE_ITEM"
    FILE_TYPE_AD_GROUP = "FILE_TYPE_AD_GROUP"
    FILE_TYPE_AD = "FILE_TYPE_AD"

class ParentEntityFilterFilterTypeEnum(str, Enum):
    FILTER_TYPE_UNSPECIFIED = "FILTER_TYPE_UNSPECIFIED"
    FILTER_TYPE_NONE = "FILTER_TYPE_NONE"
    FILTER_TYPE_ADVERTISER_ID = "FILTER_TYPE_ADVERTISER_ID"
    FILTER_TYPE_CAMPAIGN_ID = "FILTER_TYPE_CAMPAIGN_ID"
    FILTER_TYPE_MEDIA_PRODUCT_ID = "FILTER_TYPE_MEDIA_PRODUCT_ID"
    FILTER_TYPE_INSERTION_ORDER_ID = "FILTER_TYPE_INSERTION_ORDER_ID"
    FILTER_TYPE_LINE_ITEM_ID = "FILTER_TYPE_LINE_ITEM_ID"


@dataclass_json
@dataclass
class ParentEntityFilter:
    file_type: Optional[List[ParentEntityFilterFileTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileType' }})
    filter_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterIds' }})
    filter_type: Optional[ParentEntityFilterFilterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterType' }})
    
