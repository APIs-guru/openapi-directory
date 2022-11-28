from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OrderDocumentTypeEnum(str, Enum):
    PLANNING_ORDER_TYPE_INSERTION_ORDER = "PLANNING_ORDER_TYPE_INSERTION_ORDER"
    PLANNING_ORDER_TYPE_CHANGE_ORDER = "PLANNING_ORDER_TYPE_CHANGE_ORDER"


@dataclass_json
@dataclass
class OrderDocument:
    r"""OrderDocument
    Contains properties of a Planning order document.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    amended_order_document_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amendedOrderDocumentId') }})
    approved_by_user_profile_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvedByUserProfileIds') }})
    cancelled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelled') }})
    created_info: Optional[LastModifiedInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdInfo') }})
    effective_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    last_sent_recipients: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSentRecipients') }})
    last_sent_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSentTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderId') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    signed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signed') }})
    subaccount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subaccountId') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[OrderDocumentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
