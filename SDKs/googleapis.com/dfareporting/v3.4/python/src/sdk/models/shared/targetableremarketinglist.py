from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""TargetableRemarketingList
    Contains properties of a targetable remarketing list. Remarketing enables you to create lists of users who have performed specific actions on a site, then target ads to members of those lists. This resource is a read-only view of a remarketing list to be used to faciliate targeting ads to specific lists. Remarketing lists that are owned by your advertisers and those that are shared to your advertisers or account are accessible via this resource. To manage remarketing lists that are owned by your advertisers, use the RemarketingLists resource.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    advertiser_id_dimension_value: Optional[DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserIdDimensionValue') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    life_span: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifeSpan') }})
    list_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listSize') }})
    list_source: Optional[TargetableRemarketingListListSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listSource') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    subaccount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subaccountId') }})
    
