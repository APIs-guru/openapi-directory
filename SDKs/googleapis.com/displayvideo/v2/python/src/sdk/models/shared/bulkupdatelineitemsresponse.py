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
class BulkUpdateLineItemsResponse:
    r"""BulkUpdateLineItemsResponse
    Response message for LineItemService.BulkUpdateLineItems.
    """
    
    errors: Optional[List[Status]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    failed_line_item_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedLineItemIds') }})
    skipped_line_item_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skippedLineItemIds') }})
    updated_line_item_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedLineItemIds') }})
    
