from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import dimensionvalue

class TargetableRemarketingListListSourceEnum(str, Enum):
    REMARKETING_LIST_SOURCE_OTHER = "REMARKETING_LIST_SOURCE_OTHER"
    REMARKETING_LIST_SOURCE_ADX = "REMARKETING_LIST_SOURCE_ADX"
    REMARKETING_LIST_SOURCE_DFP = "REMARKETING_LIST_SOURCE_DFP"
    REMARKETING_LIST_SOURCE_XFP = "REMARKETING_LIST_SOURCE_XFP"
    REMARKETING_LIST_SOURCE_DFA = "REMARKETING_LIST_SOURCE_DFA"
    REMARKETING_LIST_SOURCE_GA = "REMARKETING_LIST_SOURCE_GA"
    REMARKETING_LIST_SOURCE_YOUTUBE = "REMARKETING_LIST_SOURCE_YOUTUBE"
    REMARKETING_LIST_SOURCE_DBM = "REMARKETING_LIST_SOURCE_DBM"
    REMARKETING_LIST_SOURCE_GPLUS = "REMARKETING_LIST_SOURCE_GPLUS"
    REMARKETING_LIST_SOURCE_DMP = "REMARKETING_LIST_SOURCE_DMP"
    REMARKETING_LIST_SOURCE_PLAY_STORE = "REMARKETING_LIST_SOURCE_PLAY_STORE"


@dataclass_json
@dataclass
class TargetableRemarketingList:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    advertiser_id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserIdDimensionValue' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    life_span: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifeSpan' }})
    list_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listSize' }})
    list_source: Optional[TargetableRemarketingListListSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listSource' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    subaccount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subaccountId' }})
    
