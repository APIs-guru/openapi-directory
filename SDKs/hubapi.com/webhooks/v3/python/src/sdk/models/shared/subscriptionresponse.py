from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SubscriptionResponseEventTypeEnum(str, Enum):
    CONTACT_PROPERTY_CHANGE = "contact.propertyChange"
    COMPANY_PROPERTY_CHANGE = "company.propertyChange"
    DEAL_PROPERTY_CHANGE = "deal.propertyChange"
    TICKET_PROPERTY_CHANGE = "ticket.propertyChange"
    PRODUCT_PROPERTY_CHANGE = "product.propertyChange"
    LINE_ITEM_PROPERTY_CHANGE = "line_item.propertyChange"
    CONTACT_CREATION = "contact.creation"
    CONTACT_DELETION = "contact.deletion"
    CONTACT_PRIVACY_DELETION = "contact.privacyDeletion"
    COMPANY_CREATION = "company.creation"
    COMPANY_DELETION = "company.deletion"
    DEAL_CREATION = "deal.creation"
    DEAL_DELETION = "deal.deletion"
    TICKET_CREATION = "ticket.creation"
    TICKET_DELETION = "ticket.deletion"
    PRODUCT_CREATION = "product.creation"
    PRODUCT_DELETION = "product.deletion"
    LINE_ITEM_CREATION = "line_item.creation"
    LINE_ITEM_DELETION = "line_item.deletion"
    CONVERSATION_CREATION = "conversation.creation"
    CONVERSATION_DELETION = "conversation.deletion"
    CONVERSATION_NEW_MESSAGE = "conversation.newMessage"
    CONVERSATION_PRIVACY_DELETION = "conversation.privacyDeletion"
    CONVERSATION_PROPERTY_CHANGE = "conversation.propertyChange"


@dataclass_json
@dataclass
class SubscriptionResponse:
    r"""SubscriptionResponse
    Complete details for an event subscription.
    """
    
    active: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_type: SubscriptionResponseEventTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    property_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyName') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
