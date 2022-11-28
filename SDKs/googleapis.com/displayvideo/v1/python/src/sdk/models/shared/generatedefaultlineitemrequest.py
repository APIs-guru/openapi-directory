from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GenerateDefaultLineItemRequestLineItemTypeEnum(str, Enum):
    LINE_ITEM_TYPE_UNSPECIFIED = "LINE_ITEM_TYPE_UNSPECIFIED"
    LINE_ITEM_TYPE_DISPLAY_DEFAULT = "LINE_ITEM_TYPE_DISPLAY_DEFAULT"
    LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INSTALL = "LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INSTALL"
    LINE_ITEM_TYPE_VIDEO_DEFAULT = "LINE_ITEM_TYPE_VIDEO_DEFAULT"
    LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INSTALL = "LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INSTALL"
    LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INVENTORY = "LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INVENTORY"
    LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INVENTORY = "LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INVENTORY"
    LINE_ITEM_TYPE_AUDIO_DEFAULT = "LINE_ITEM_TYPE_AUDIO_DEFAULT"
    LINE_ITEM_TYPE_VIDEO_OVER_THE_TOP = "LINE_ITEM_TYPE_VIDEO_OVER_THE_TOP"


@dataclass_json
@dataclass
class GenerateDefaultLineItemRequestInput:
    r"""GenerateDefaultLineItemRequestInput
    Request message for LineItemService.GenerateDefaultLineItem.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    insertion_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertionOrderId') }})
    line_item_type: Optional[GenerateDefaultLineItemRequestLineItemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemType') }})
    mobile_app: Optional[MobileAppInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileApp') }})
    
