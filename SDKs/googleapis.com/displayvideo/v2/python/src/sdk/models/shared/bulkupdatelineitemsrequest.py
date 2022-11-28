from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BulkUpdateLineItemsRequestInput:
    r"""BulkUpdateLineItemsRequestInput
    Request message for LineItemService.BulkUpdateLineItems.
    """
    
    line_item_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemIds') }})
    target_line_item: Optional[LineItemInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetLineItem') }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    
